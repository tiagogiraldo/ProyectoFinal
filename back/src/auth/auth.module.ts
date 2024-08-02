import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/customers/customers.entity';
import { CustomersRepository } from 'src/customers/customers.repository';
import { HotelAdminRepository } from 'src/hotel-admins/hotel-admin.repository';
import { HotelAdmins } from 'src/hotel-admins/hotelAdmins.entity';
import { CustomersModule } from 'src/customers/customers.module';
import { HotelAdminsModule } from 'src/hotel-admins/hotel-admins.module';
import { MailService } from 'src/email-notify/mail.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './strategies/google.startegy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customers, HotelAdmins]),
    CustomersModule,
    HotelAdminsModule,
    PassportModule.register({ defaultStrategy: 'google' }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    CustomersRepository,
    HotelAdminRepository,
    MailService,
    GoogleStrategy,
  ],
})
export class AuthModule {}
