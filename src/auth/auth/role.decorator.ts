import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  // armazena a informação na memória
  return SetMetadata('role', role);
};
