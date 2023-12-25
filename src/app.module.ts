import { Module } from '@nestjs/common';
import UserModule from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ]
})
export class AppModule { }
