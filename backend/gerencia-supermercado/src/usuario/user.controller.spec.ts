import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './user.controller';
import { UsuarioService } from './user.service';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('UsuarioController', () => {
  let controller: UsuarioController;
  let service: UsuarioService;

  const mockUsuarioService = {
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
          useValue: mockUsuarioService,
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
    service = module.get<UsuarioService>(UsuarioService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call service.findAll and return result', async () => {
      const mockUsers = [
        { id: '1', name: 'João Silva', email: 'joao@email.com' },
        { id: '2', name: 'Maria Santos', email: 'maria@email.com' },
      ];

      mockUsuarioService.findAll.mockResolvedValue(mockUsers);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledTimes(1);
      expect(service.findAll).toHaveBeenCalledWith();
      expect(result).toEqual(mockUsers);
    });

    it('should handle empty result from service', async () => {
      mockUsuarioService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledTimes(1);
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should call service.findByEmail with correct email parameter', async () => {
      const mockUser = { id: '1', name: 'João Silva', email: 'joao@email.com' };
      const email = 'joao@email.com';

      mockUsuarioService.findByEmail.mockResolvedValue(mockUser);

      const result = await controller.findOne(email);

      expect(service.findByEmail).toHaveBeenCalledWith(email);
      expect(service.findByEmail).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUser);
    });

    it('should propagate NotFoundException from service', async () => {
      const email = 'inexistente@email.com';
      const notFoundError = new NotFoundException('Usuário não encontrado');

      mockUsuarioService.findByEmail.mockRejectedValue(notFoundError);

      await expect(controller.findOne(email)).rejects.toThrow(NotFoundException);
      expect(service.findByEmail).toHaveBeenCalledWith(email);
    });
  });

  describe('create', () => {
    it('should call service.create with correct DTO and return result', async () => {
      const createUserDto: createUserDTO = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: 'senhaSegura123',
      };

      const mockCreatedUser = {
        id: '1',
        name: 'João Silva',
        email: 'joao@email.com',
      };

      mockUsuarioService.create.mockResolvedValue(mockCreatedUser);

      const result = await controller.create(createUserDto);

      expect(service.create).toHaveBeenCalledWith(createUserDto);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockCreatedUser);
    });

    it('should propagate service errors without modification', async () => {
      const createUserDto: createUserDTO = {
        name: 'João Silva',
        email: 'joao@email.com',
        password: 'senhaSegura123',
      };

      const serviceError = new BadRequestException('Email já existe');
      mockUsuarioService.create.mockRejectedValue(serviceError);

      await expect(controller.create(createUserDto)).rejects.toThrow(BadRequestException);
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('update', () => {
    it('should call service.update with correct parameters and return result', async () => {
      const userId = '1';
      const updateUserDto: updateUserDTO = {
        name: 'João Silva Atualizado',
        email: 'joao.novo@email.com',
      };

      const mockUpdatedUser = {
        id: userId,
        name: 'João Silva Atualizado',
        email: 'joao.novo@email.com',
      };

      mockUsuarioService.update.mockResolvedValue(mockUpdatedUser);

      const result = await controller.update(userId, updateUserDto);

      expect(service.update).toHaveBeenCalledWith(userId, updateUserDto);
      expect(service.update).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUpdatedUser);
    });

    it('should propagate NotFoundException from service', async () => {
      const userId = '999';
      const updateUserDto: updateUserDTO = {
        name: 'Usuário Inexistente',
      };

      const notFoundError = new NotFoundException('Usuário não encontrado');
      mockUsuarioService.update.mockRejectedValue(notFoundError);

      await expect(controller.update(userId, updateUserDto)).rejects.toThrow(NotFoundException);
      expect(service.update).toHaveBeenCalledWith(userId, updateUserDto);
    });
  });

  describe('remove', () => {
    it('should call service.remove with correct userId and return undefined', async () => {
      const userId = '1';

      mockUsuarioService.remove.mockResolvedValue(undefined);

      const result = await controller.remove(userId);

      expect(service.remove).toHaveBeenCalledWith(userId);
      expect(service.remove).toHaveBeenCalledTimes(1);
      expect(result).toBeUndefined();
    });

    it('should propagate NotFoundException from service', async () => {
      const userId = '999';

      const notFoundError = new NotFoundException('Usuário não encontrado');
      mockUsuarioService.remove.mockRejectedValue(notFoundError);

      await expect(controller.remove(userId)).rejects.toThrow(NotFoundException);
      expect(service.remove).toHaveBeenCalledWith(userId);
    });
  });
});
