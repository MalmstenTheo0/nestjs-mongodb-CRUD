import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://theomalmsten0:oGwyfj3bj6OJBDcB@cluster0.k3e6e.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0'), //MongoDB URI
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
