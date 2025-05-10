import { Controller, Post, Body } from '@nestjs/common';
import { CardService } from './card.service';

@Controller()
export class AppController {
  constructor(private readonly cardService: CardService) {}

  /**
   * {"cardKey":"11"}
   */
  @Post()
  async getHello(@Body() body: { cardKey: string }) {
    console.log('Received cardKey:', body.cardKey);

    // 使用卡密服务验证卡密
    const validationResult = await this.cardService.validateCardKey(
      body.cardKey,
    );

    // 如果卡密有效，标记为已使用
    if (validationResult.valid) {
      await this.cardService.markCardAsUsed(body.cardKey);
    }

    return validationResult;
  }
}
