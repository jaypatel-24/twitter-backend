import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  getHello(): any {
    return 'Hello World!';
  }
  constructor() {}
}
