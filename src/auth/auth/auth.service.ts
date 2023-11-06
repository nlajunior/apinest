import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://localhost:8080/realms/fullcycle/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest-api',
          client_secret: 'bXYmm0yheDylLZWvxYUqQgkpLuNGIX17',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );

    return data;
  }
}
