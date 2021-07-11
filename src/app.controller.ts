import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  constructor() {}

  @Get()
  getHello(): any {
    return 'Hello World!';
  }

  @Get('/abc')
  getAbc(): string {
    return 'abc';
  }
}
