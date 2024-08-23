import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SystemService {
  protected readonly logger = new Logger(this.constructor.name);

  ping(): string {
    this.logger.log('ping');
    return 'pong';
  }
}
