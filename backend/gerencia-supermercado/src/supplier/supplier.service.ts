import { Delete, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from 'src/database/entities/supplier.entity';
import { Repository } from 'typeorm';
import { createSupplierDTO } from './dto/create-supplier.dto';
import { updateSupplierDTO } from './dto/update-supplier.dto';
import { State } from 'src/database/entities/state.entity';
import { Address } from 'src/database/entities/address.entity';
import { Contact } from 'src/database/entities/contact.entity';
import { readSupplierDTO } from './dto/read-supplier.dto';

@Injectable()
export class SupplierService {

    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository <Supplier>,
        @InjectRepository(State)
        private readonly stateRepository: Repository <State>,
        @InjectRepository(Address)
        private readonly addressRepository: Repository <Address>,      
        @InjectRepository(Contact)
        private readonly contactRepository: Repository <Contact>
    ){}

    async findAll() : Promise<readSupplierDTO[]> {
        const suppliers = await this.supplierRepository.find({
        relations: {
            idendereco: {
            estado: true
            },
            idcontato: true
        }
        });

        return suppliers.map(supplier => new readSupplierDTO(supplier))
    }

    async findOne(id: number){
        const supplier = await this.supplierRepository.findOne({
            relations: {
                idendereco: {
                estado: true
                },
                idcontato: true
            },
            where: {id},
        })
        if(!supplier){
            throw new HttpException(`Fornecedor ${id} não encontrado`, 400)
        }
        return new readSupplierDTO(supplier);
    }

    async create(createSupplierDTO : createSupplierDTO){
        const {nome, cnpj, endereco, contato} = createSupplierDTO;

        let estado = await this.stateRepository.findOne({
            where: { nome: endereco.estado.nome, uf: endereco.estado.uf}
        })
        if(!estado){
        estado = this.stateRepository.create(endereco.estado);
        await this.stateRepository.save(estado);
        }

        const newAddress = this.addressRepository.create({
            cep: endereco.cep,
            complemento: endereco.complemento,
            estado,
        })
        await this.addressRepository.save(newAddress)

        const newContact = this.contactRepository.create(contato);
        await this.contactRepository.save(newContact)

        const supplier = this.supplierRepository.create({
            nome,
            cnpj,
            idendereco: newAddress,
            idcontato: newContact,
        })

        return this.supplierRepository.save(supplier)
    }

    async update(id: number, updateSupplierDTO: updateSupplierDTO){
        const {endereco, contato} = updateSupplierDTO;

        const supplier = await this.supplierRepository.preload({
            id,
            ...updateSupplierDTO,
        });

        if(!supplier){
            throw new NotFoundException('Fornecedor não encontrado');
        }

        if(endereco){
            let estado = await this.stateRepository.findOne({
                where: {nome: endereco.estado.nome, uf: endereco.estado.uf },
            });

        if (!estado){
            estado = this.stateRepository.create(endereco.estado);
            await this.stateRepository.save(estado);
        }

        const newAddress = this.addressRepository.create({
            cep: endereco.cep,
            complemento: endereco.complemento,
            estado
        });
        supplier.idendereco = newAddress;
        }
        if (contato){
            const newContact = this.contactRepository.create(contato);
            supplier.idcontato = newContact;
        }

        return this.supplierRepository.save(supplier)

    }
    
    async remove(id: number){
        const supplier = await this.supplierRepository.findOne({
            where: {id},
            relations: {
                idendereco: {
                estado: true
                },
                idcontato: true
            },
        })

        if(!supplier){
            throw new NotFoundException("Não encontrado");
        }
        return this.supplierRepository.remove(supplier);
    }
}
