import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsController } from './api/flights/flights.controller';
import { FlightsModule } from './api/flights/flights.module';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), FlightsModule, UserModule],
  controllers: [AppController, FlightsController],
  providers: [AppService],
})
export class AppModule {}
