import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsController } from './api/flights/flights.controller';
import { FlightsModule } from './api/flights/flights.module';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
    }),
    FlightsModule,
    UserModule,
  ],
  controllers: [AppController, FlightsController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
