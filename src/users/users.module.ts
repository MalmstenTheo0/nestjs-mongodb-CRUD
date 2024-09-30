import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/schemas/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({ //Decorator define la clase UserModule 
  imports: [ //Modulos externos que este modulo necesita
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema,
    }])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
//Indicamos que UserModule trabajará con la colección users (basada en el esquema UserSchema).

export class UsersModule { }