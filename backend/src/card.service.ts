import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

export interface Card {
  cardKey: string;
  isUsed: boolean;
  usedAt: string | null;
  createdAt: string;
}

@Injectable()
export class CardService {
  private readonly cardsFilePath = path.join(
    __dirname,
    '..',
    'src',
    'cards.json',
  );

  // 验证卡密格式
  validateCardKeyFormat(cardKey: string): boolean {
    const cardKeyRegex =
      /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/;
    return cardKeyRegex.test(cardKey);
  }

  // 读取卡密文件
  async readCardsFile(): Promise<Card[]> {
    try {
      const data = await fs.readFile(this.cardsFilePath, 'utf8');
      return JSON.parse(data) as Card[];
    } catch (error) {
      console.error('读取卡密文件失败:', error);
      return [];
    }
  }

  // 写入卡密文件
  async writeCardsFile(cards: Card[]): Promise<void> {
    try {
      await fs.writeFile(
        this.cardsFilePath,
        JSON.stringify(cards, null, 2),
        'utf8',
      );
    } catch (error) {
      console.error('写入卡密文件失败:', error);
    }
  }

  // 生成随机字符串
  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    const randomBytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytes[i] % characters.length;
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  // 生成卡密
  private generateCardKey(): string {
    return [
      this.generateRandomString(5),
      this.generateRandomString(5),
      this.generateRandomString(5),
      this.generateRandomString(5),
      this.generateRandomString(5),
    ].join('-');
  }

  // 生成多个卡密
  async generateCards(count: number): Promise<Card[]> {
    const cards = await this.readCardsFile();
    const newCards: Card[] = [];

    for (let i = 0; i < count; i++) {
      let cardKey: string;
      let isUnique = false;

      // 确保生成的卡密是唯一的
      while (!isUnique) {
        cardKey = this.generateCardKey();
        isUnique = !cards.some((card) => card.cardKey === cardKey);
      }

      const newCard: Card = {
        cardKey,
        isUsed: false,
        usedAt: null,
        createdAt: new Date().toISOString(),
      };

      newCards.push(newCard);
      cards.push(newCard);
    }

    await this.writeCardsFile(cards);
    return newCards;
  }

  // 验证卡密是否有效
  async validateCardKey(
    cardKey: string,
  ): Promise<{ valid: boolean; code: string; message: string }> {
    // 先验证格式
    if (!this.validateCardKeyFormat(cardKey)) {
      return {
        valid: false,
        code: 'INVALID_INPUT',
        message:
          '卡密格式错误: cardKey: 卡密格式错误，正确格式应为：XXXXX-XXXXX-XXXXX-XXXXX-XXXXX',
      };
    }

    // 读取卡密文件
    const cards = await this.readCardsFile();

    // 查找卡密
    const card = cards.find((c) => c.cardKey === cardKey);

    // 卡密不存在
    if (!card) {
      return {
        valid: false,
        code: 'CARD_NOT_FOUND',
        message: '卡密无效: 系统中不存在该卡密',
      };
    }

    // 卡密已使用
    if (card.isUsed) {
      return {
        valid: false,
        code: 'CARD_USED',
        message: `卡密已使用: 该卡密已于 ${card.usedAt} 被使用`,
      };
    }

    // 卡密有效
    return {
      valid: true,
      code: 'SUCCESS',
      message: '卡密验证成功',
    };
  }

  // 标记卡密为已使用
  async markCardAsUsed(cardKey: string): Promise<boolean> {
    const cards = await this.readCardsFile();
    const cardIndex = cards.findIndex((c) => c.cardKey === cardKey);

    if (cardIndex === -1) {
      return false;
    }

    cards[cardIndex].isUsed = true;
    cards[cardIndex].usedAt = new Date().toISOString();

    await this.writeCardsFile(cards);
    return true;
  }
}
