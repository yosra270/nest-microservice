import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesController } from './services/services.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'customer-microservice',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  controllers: [AppController, ServicesController],
  providers: [AppService],
})
export class AppModule {}
