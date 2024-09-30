//El service se hace cargo de interactuar con la data
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { updateUserDto } from './dto/UpdateUser.dto';

@Injectable() //"Inyectamos" el Model que queremos usar
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>) { } //Importamos la clase

  createUser(createUserDto: CreateUserDto) { //Para cuando se llama a este metodo, la validacion del DTO ya fue realizada. DTO = Data Transfer Object
    const newUser = new this.UserModel(createUserDto) //Creamos una nueva instancia con los datos del cliente
    return newUser.save() //Lo guardamos en la DB
  }

  getUsers() {
    return this.UserModel.find() //Traemos todos los usuarios 
  }

  getUsersById(id: string) {
    return this.UserModel.findById(id) //Buscamos por ID. Una vez creado el metodo, VAMOS AL CONTROLLER
  }

  updateUser(id: string, updateUserDto: updateUserDto) {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }) //Pasamos como segundo parametro el DTO con los datos que queremos actualizar
  }

  deleteUser(id: string){
    return this.UserModel.findByIdAndDelete(id)
  }
}

//Una vez inyectado podemos empezar a usarla para interactuar con la DB