import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendEmail(address: string, mailTitle: string, mailContents: string) {
    await this.mailerService.sendMail({
      to: address, // 배열가능
      from: this.configService.get<string>('GMAIL_SMTP_USER'),
      subject: mailTitle,
      text: mailContents,
    });
  }
}
