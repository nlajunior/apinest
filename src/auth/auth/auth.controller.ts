import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
// import Roles, { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { Role } from './role.decorator';
import { RoleGuard } from '../role/role.guard';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
// import {
//   AuthGuard,
//   Public,
//   RoleMatchingMode,
//   Roles,
// } from 'nest-keycloak-connect';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private conf: ConfigService,
  ) {}

  @Post('login')
  // @Public(false)
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  // @Roles({
  //   roles: ['realm:app_user'],
  //   // mode: RoleMatchingMode.ALL,
  // })
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    return { name: 'Nilo', host: req.hostname };
  }
}
