//Brindamos los endpoints para que use el client
import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { updateUserDto } from "./dto/UpdateUser.dto";
import mongoose from "mongoose";

@Controller('users') //ESTA SERA LA RUTA
export class UsersController {
  //Route Handelers

  constructor(private usersService: UsersService) { }

  @Post()
  @UsePipes(new ValidationPipe) //Habilitamos validacion para este endpoint en especifico
  createUser(@Body() createUserDtio: CreateUserDto) { //Metodo
    console.log(createUserDtio); //Observamos lo que envio el usuario
    return this.usersService.createUser(createUserDtio) //Invocamos el método createUser del servicio UsersService, pasándole el objeto createUserDtio
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers() //Referenciamos el service creado
  }

  @Get(':id') //Agregamos /:id a users/ -> /users/:id
  async getUserById(@Param('id') id: string) { //A traves del decorador, obtenemos el id. Async porque getUsersById devuelve promesa
    const isValid = mongoose.Types.ObjectId.isValid(id) //Chequeamos que el id sea del tipo que usa Mongo. Retorna Boolesan. Se puede hacer en un middleware
    if (!isValid) throw new HttpException("User not found.", 404)

    const findUser = await this.usersService.getUsersById(id)
    if (!findUser) throw new HttpException("User not found.", 404)
    return findUser
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe) //Habilitamos validacion para este endpoint en especifico
  async updateUser(@Param('id') id: string, @Body() updateUserDto: updateUserDto) { //Creamos un DTO especifico para el Update
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) throw new HttpException("Invalid Id.", 400)
    const updateUser = await this.usersService.updateUser(id, updateUserDto)
    if (!updateUser) throw new HttpException('User Not Found', 404)
    return updateUser
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) throw new HttpException("Invalid Id.", 400)
    
    const deletedUser = await this.usersService.deleteUser(id)
    console.log(deletedUser);
    if (!deletedUser) throw new HttpException('User Not Found', 404)
    return
  }
}