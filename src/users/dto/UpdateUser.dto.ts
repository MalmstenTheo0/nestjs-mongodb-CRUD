//Lo que esperamos que envie el user
import { IsOptional, IsString } from "class-validator"

export class updateUserDto { //Una vez que crean la cuenta no pueden editar su username, por eso no lo incluimos

  @IsOptional()
  @IsString()
  displayName?: string //Optional

  @IsOptional()
  @IsString()
  avatarUrl?: string
}