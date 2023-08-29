import { Test, TestingModule } from '@nestjs/testing';
import { LuhnService } from './luhn.service';

describe('LuhnService', () => {
  let service: LuhnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LuhnService],
    }).compile();

    service = module.get<LuhnService>(LuhnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate a valid Luhn number', () => {
    expect(service.validateNumber(49927398716)).toBe(true);
    expect(service.validateNumber(1234567812345670)).toBe(true);
    expect(service.validateNumber(2222405343248877)).toBe(true);
    expect(service.validateNumber(2222990905257051)).toBe(true);
  });

  it('should not validate an invalid Luhn number', () => {
    expect(service.validateNumber(49927398717)).toBe(false);
    expect(service.validateNumber(1234567812345678)).toBe(false);
  });
});
