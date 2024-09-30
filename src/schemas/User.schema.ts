import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema() //Decorator
export class User { //Creamos la estructura (Schema) de los documentos en la DB

  @Prop({ unique: true, required: true }) //Definir Propiedades
  username: string

  @Prop({ required: false })
  displayName?: string

  @Prop({ required: false })
  avatarURL?: string
}

export const UserSchema = SchemaFactory.createForClass(User) //Creamos el schema User para interactuar con la base de datos, definir modelos, realizar consultas, etc.