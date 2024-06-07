import { ConfigType } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Flight, Passenger } from '../entities';
import configuration from '../config/configuration';

const entities = [User, Flight, Passenger];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [configuration.KEY],
      useFactory: async (configService: ConfigType<typeof configuration>) => {
        return {
          type: 'mysql',
          host: configService.DATABASE.HOST,
          port: parseInt(configService.DATABASE.PORT),
          username: configService.DATABASE.USER,
          password: configService.DATABASE.PASSWORD,
          database: configService.DATABASE.DATABASE,
          synchronize: configService.DATABASE.SYNC,
          autoLoadEntities: true,
          entities,
        };
      },
    }),
  ],
})
export class MySQLConfigModule {}
