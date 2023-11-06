// import { AuthGuard } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { HttpModule } from '@nestjs/axios';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
// import {
//   KeycloakConnectModule,
//   RoleGuard,
//   AuthGuard,
// } from 'nest-keycloak-connect';

@Module({
  imports: [
    HttpModule,
    // KeycloakConnectModule.register({
    //   authServerUrl: 'http://localhost:8080/',
    //   realm: 'iel-check',
    //   clientId: 'stg-iel-check',
    //   secret: 'bXYmm0yheDylLZWvxYUqQgkpLuNGIX17',
    // }),

    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategyService,

    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AuthModule {}
