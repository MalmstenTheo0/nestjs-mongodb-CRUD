//Representa la data transferida del client -> server

//Usamos class-validator y class-transformer para validar data
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto { //Escribimos los campos que esperamos que el client envie
  @IsNotEmpty() //Decorator de class-validator
  @IsString()
  username: string

  @IsString()
  @IsOptional()
  displayName?: string //Optional
}