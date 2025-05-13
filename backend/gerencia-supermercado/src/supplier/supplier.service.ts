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
            id_address: {
            state: true
            },
            id_contacts: true
        }
        });

        return suppliers.map(supplier => new readSupplierDTO(supplier))
    }

    async findOne(id: string){
        const supplier = await this.supplierRepository.findOne({
            relations: {
                id_address: {
                state: true
                },
                id_contacts: true
            },
            where: {id},
        })
        if(!supplier){
            throw new HttpException(`Fornecedor ${id} não encontrado`, 400)
        }
        return new readSupplierDTO(supplier);
    }

    async create(createSupplierDTO : createSupplierDTO){
        const {name, cnpj, address, contact} = createSupplierDTO;

        let state = await this.stateRepository.findOne({
            where: { name: address.state.name, uf: address.state.uf}
        })
        if(!state){
        state = this.stateRepository.create(address.state);
        await this.stateRepository.save(state);
        }

        const newAddress = this.addressRepository.create({
            cep: address.cep,
            complement: address.complement,
            state,
        })
        await this.addressRepository.save(newAddress)

        const newContact = this.contactRepository.create(contact);
        await this.contactRepository.save(newContact)

        const supplier = this.supplierRepository.create({
            name,
            cnpj,
            id_address: newAddress,
            id_contacts: newContact,
        })

        return this.supplierRepository.save(supplier)
    }

    async update(id: string, updateSupplierDTO: updateSupplierDTO){
        const {address, contact} = updateSupplierDTO;

        const supplier = await this.supplierRepository.preload({
            id,
            ...updateSupplierDTO,
        });

        if(!supplier){
            throw new NotFoundException('Fornecedor não encontrado');
        }

        if(address){
            let state = await this.stateRepository.findOne({
                where: {name: address.state.name, uf: address.state.uf },
            });

        if (!state){
            state = this.stateRepository.create(address.state);
            await this.stateRepository.save(state);
        }

        const newAddress = this.addressRepository.create({
            cep: address.cep,
            complement: address.complement,
            state
        });
        supplier.id_address = newAddress;
        }
        if (contact){
            const newContact = this.contactRepository.create(contact);
            supplier.id_contacts = newContact;
        }

        return this.supplierRepository.save(supplier)

    }
    
    async remove(id: string){
        const supplier = await this.supplierRepository.findOne({
            where: {id},
            relations: {
                id_address: {
                state: true
                },
                id_contacts: true
            },
        })

        if(!supplier){
            throw new NotFoundException("Não encontrado");
        }
        return this.supplierRepository.remove(supplier);
    }
}
