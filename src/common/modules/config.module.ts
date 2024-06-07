import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import JoiValidationSchema from '../config/validation-schema/joi-vaidations.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: JoiValidationSchema,
    }),
  ],
})
export class CustomConfigModule {}
