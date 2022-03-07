import { Module } from '@nestjs/common';
import { CurrencyinfoController } from './currencyinfo.controller';
import { CurrencyinfoService } from './currencyinfo.service';

@Module({
  controllers: [CurrencyinfoController],
  providers: [CurrencyinfoService]
})
export class CurrencyinfoModule {}
