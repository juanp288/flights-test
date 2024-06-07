import { Module } from '@nestjs/common';
import { FlightModule } from './components/flight/flight.module';
import { UserModule } from './components/user/user.module';
import { PassengerModule } from './components/passenger/passenger.module';
import { CustomConfigModule } from './common/modules/config.module';
import { ServerStaticConfigModule } from './common/modules/server-static.module';
import { MySQLConfigModule } from './common/modules/typeorm.module';

@Module({
  imports: [
    MySQLConfigModule,
    
    // Configuration
    ServerStaticConfigModule,
    CustomConfigModule,

    // Bussiness logic
    FlightModule,
    UserModule,
    PassengerModule,
  ],
})
export class AppModule {}
