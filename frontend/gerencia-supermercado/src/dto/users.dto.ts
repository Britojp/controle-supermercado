export interface UserDTO {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface userDTO{
  id: string,
}

export interface createUserDTO{
  name: string,
  email: string,
  password: string
}

export interface UpdateUserDTO{
  name?: string,
  email?: string,
  password?: string,
}
