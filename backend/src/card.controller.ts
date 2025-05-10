import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  // 生成新卡密
  @Post('generate')
  async generateCards(@Body() body: { count: number }) {
    const count = body.count || 1;
    const generatedCards = await this.cardService.generateCards(count);
    return {
      success: true,
      cards: generatedCards,
    };
  }

  // 获取所有卡密
  @Get()
  async getAllCards() {
    const cards = await this.cardService.readCardsFile();
    return {
      success: true,
      total: cards.length,
      cards,
    };
  }

  // 获取卡密状态
  @Get('status')
  async getCardStatus(@Query('cardKey') cardKey: string) {
    if (!cardKey) {
      return {
        success: false,
        message: '请提供卡密',
      };
    }

    const validationResult = await this.cardService.validateCardKey(cardKey);
    return {
      success: true,
      ...validationResult,
    };
  }
}
