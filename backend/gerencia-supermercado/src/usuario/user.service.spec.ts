import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioService } from './user.service';
import { User } from '../database/entities/user.entity';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';
import { EmailNotFoundError, UserNotFoundError } from './errors';
import * as bcrypt from 'bcrypt';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let userRepository: Repository<User>;

  const mockUserRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    preload: jest.fn(),
    remove: jest.fn(),
  };

  const mockUser: User = {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    password: 'hashedPassword123',
    transactions: [],
    hashPassword: jest.fn(),
  };

  const mockCreateUserDto: createUserDTO = {
    name: 'João Silva',
    email: 'joao@email.com',
    password: 'senhaSegura123',
  };

  const mockUpdateUserDto: updateUserDTO = {
    name: 'João Silva Atualizado',
    email: 'joao.novo@email.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));

    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('deve retornar todos os usuários do repositório', async () => {
      const mockUsers = [mockUser, { ...mockUser, id: '2', name: 'Maria Santos' }];
      mockUserRepository.find.mockResolvedValue(mockUsers);

      const result = await service.findAll();

      expect(userRepository.find).toHaveBeenCalledWith();
      expect(userRepository.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUsers);
    });

    it('deve retornar array vazio quando não existem usuários', async () => {
      mockUserRepository.find.mockResolvedValue([]);

      const result = await service.findAll();

      expect(userRepository.find).toHaveBeenCalledWith();
      expect(result).toEqual([]);
    });

    it('deve tratar erros do repositório', async () => {
      const repositoryError = new Error('Erro de banco de dados');
      mockUserRepository.find.mockRejectedValue(repositoryError);

      await expect(service.findAll()).rejects.toThrow(repositoryError);
      expect(userRepository.find).toHaveBeenCalledWith();
    });
  });

  describe('findByEmail', () => {
    it('deve retornar usuário quando email existe', async () => {
      const email = 'joao@email.com';
      mockUserRepository.findOne.mockResolvedValue(mockUser);

      const result = await service.findByEmail(email);

      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { email },
      });
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUser);
    });

    it('deve lançar EmailNotFoundError quando email não existe', async () => {
      const email = 'inexistente@email.com';
      mockUserRepository.findOne.mockResolvedValue(null);

      await expect(service.findByEmail(email)).rejects.toThrow(EmailNotFoundError);
      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { email },
      });
    });

    it('deve tratar erros do repositório', async () => {
      const email = 'joao@email.com';
      const repositoryError = new Error('Erro de banco de dados');
      mockUserRepository.findOne.mockRejectedValue(repositoryError);

      await expect(service.findByEmail(email)).rejects.toThrow(repositoryError);
    });
  });

  describe('create', () => {
    it('deve hashear senha e criar usuário com sucesso', async () => {
      const hashedPassword = 'hashedPassword123';
      const userToSave = { ...mockCreateUserDto, password: hashedPassword };
      const createdUser = { ...mockUser, password: hashedPassword };
      const expectedResult = { ...createdUser, password: undefined };

      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashedPassword as never);
      mockUserRepository.save.mockResolvedValue(createdUser);

      const result = await service.create(mockCreateUserDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(mockCreateUserDto.password, 10);
      expect(userRepository.save).toHaveBeenCalledWith(userToSave);
      expect(userRepository.save).toHaveBeenCalledTimes(1);
      expect(result).toEqual(expectedResult);
      expect(result.password).toBeUndefined();
    });

    it('deve tratar erros de hash de senha', async () => {
      const hashingError = new Error('Erro ao hashear senha');
      jest.spyOn(bcrypt, 'hash').mockRejectedValue(hashingError as never);

      await expect(service.create(mockCreateUserDto)).rejects.toThrow(hashingError);
      expect(bcrypt.hash).toHaveBeenCalledWith(mockCreateUserDto.password, 10);
      expect(userRepository.save).not.toHaveBeenCalled();
    });

    it('deve tratar erros de salvamento no repositório', async () => {
      const hashedPassword = 'hashedPassword123';
      const saveError = new Error('Erro ao salvar usuário');

      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashedPassword as never);
      mockUserRepository.save.mockRejectedValue(saveError);

      await expect(service.create(mockCreateUserDto)).rejects.toThrow(saveError);
      expect(bcrypt.hash).toHaveBeenCalledWith(mockCreateUserDto.password, 10);
      expect(userRepository.save).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('deve atualizar usuário com sucesso quando usuário existe', async () => {
      const userId = '1';
      const userToUpdate = { ...mockUser, ...mockUpdateUserDto };
      const updatedUser = { ...userToUpdate };

      mockUserRepository.preload.mockResolvedValue(userToUpdate);
      mockUserRepository.save.mockResolvedValue(updatedUser);

      const result = await service.update(userId, mockUpdateUserDto);

      expect(userRepository.preload).toHaveBeenCalledWith({
        id: userId,
        ...mockUpdateUserDto,
      });
      expect(userRepository.preload).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledWith(userToUpdate);
      expect(userRepository.save).toHaveBeenCalledTimes(1);
      expect(result).toEqual(updatedUser);
    });

    it('deve lançar UserNotFoundError quando usuário não existe', async () => {
      const userId = '999';
      mockUserRepository.preload.mockResolvedValue(null);

      await expect(service.update(userId, mockUpdateUserDto)).rejects.toThrow(UserNotFoundError);
      expect(userRepository.preload).toHaveBeenCalledWith({
        id: userId,
        ...mockUpdateUserDto,
      });
      expect(userRepository.save).not.toHaveBeenCalled();
    });

    it('deve tratar erros de carregamento do repositório', async () => {
      const userId = '1';
      const preloadError = new Error('Erro ao carregar usuário');
      mockUserRepository.preload.mockRejectedValue(preloadError);

      await expect(service.update(userId, mockUpdateUserDto)).rejects.toThrow(preloadError);
    });

    it('deve tratar erros de salvamento do repositório durante atualização', async () => {
      const userId = '1';
      const userToUpdate = { ...mockUser, ...mockUpdateUserDto };
      const saveError = new Error('Erro ao salvar atualização');

      mockUserRepository.preload.mockResolvedValue(userToUpdate);
      mockUserRepository.save.mockRejectedValue(saveError);

      await expect(service.update(userId, mockUpdateUserDto)).rejects.toThrow(saveError);
    });
  });

  describe('remove', () => {
    it('deve remover usuário com sucesso quando usuário existe', async () => {
      const userId = '1';
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      mockUserRepository.remove.mockResolvedValue(mockUser);

      const result = await service.remove(userId);

      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.remove).toHaveBeenCalledWith(mockUser);
      expect(userRepository.remove).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUser);
    });

    it('deve lançar UserNotFoundError quando usuário não existe', async () => {
      const userId = '999';
      mockUserRepository.findOne.mockResolvedValue(null);

      await expect(service.remove(userId)).rejects.toThrow(UserNotFoundError);
      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(userRepository.remove).not.toHaveBeenCalled();
    });

    it('deve tratar erros de busca do repositório durante remoção', async () => {
      const userId = '1';
      const findError = new Error('Erro ao buscar usuário');
      mockUserRepository.findOne.mockRejectedValue(findError);

      await expect(service.remove(userId)).rejects.toThrow(findError);
    });

    it('deve tratar erros de remoção do repositório', async () => {
      const userId = '1';
      const removeError = new Error('Erro ao remover usuário');

      mockUserRepository.findOne.mockResolvedValue(mockUser);
      mockUserRepository.remove.mockRejectedValue(removeError);

      await expect(service.remove(userId)).rejects.toThrow(removeError);
    });
  });
});
