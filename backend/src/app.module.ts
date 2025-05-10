import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CardService } from './card.service';
import { CardController } from './card.controller';

@Module({
  imports: [],
  controllers: [AppController, CardController],
  providers: [CardService],
})
export class AppModule {}
