import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { LuhnService } from '../luhn/luhn.service';

@Controller('api')
export class ApiController {
  constructor(private readonly luhnService: LuhnService) {}

  @Get()
  getHello(): string {
    return 'api helloooo';
  }

  @Get('/validate/:id')
  // NOTE: on a larger project I'd use ParseIntPipe and an exception filter;
  // now it's an overkill
  getProject(@Param('id') id: string, @Res() res: Response): any {
    const cardIntNumber = Number.parseInt(id);
    if (Number.isFinite(cardIntNumber) && String(cardIntNumber) === id) {
      const isValid = this.luhnService.validateNumber(cardIntNumber);
      res.json({ valid: isValid });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'Credit card number must be numeric',
      });
    }
    return cardIntNumber;
  }
}
