import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { IsInt, IsPositive, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

interface SampleObject {
  id: number;
  name: string;
  theme: string;
  tier: string;
  create_at: Date;
  price: number;
  owner: string;
}

class PaginationParams {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform(value => parseInt(`${value}`))
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Transform(value => parseInt(`${value}`))
  pageSize?: number = 10;
}

function getRandomItemFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate(): Date {
  const start = new Date(2020, 0, 1).getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start));
}

function generateRandomData(): SampleObject[] {
  const themes = ['Halloween', 'Halloween2', 'Halloween3'];
  const tiers = ['Upper body', 'Lower Body', 'Hat', 'Shoes', 'Accessory'];
  const names = ['The DJ', 'Assassin', 'Neon Guy', 'Mafia England', 'Bassketball Girl'];

  const data: SampleObject[] = [];

  for (let i = 0; i < 500; i++) {
    const id: number = i + 1;
    const name: string = getRandomItemFromArray(names);
    const theme: string = getRandomItemFromArray(themes);
    const tier: string = getRandomItemFromArray(tiers);
    const create_at: Date = getRandomDate();
    const price: number = Math.random() * 1000000;
    const owner: string = `Owner ${i + 1}`;

    const sampleObject: SampleObject = { id, name, theme, tier, create_at, price, owner };
    data.push(sampleObject);
  }

  return data;
}

@Controller('data')
export class DataController {
  private readonly sampleData: SampleObject[] = generateRandomData();

  @Get('getData')
  getData(@Query() { page = 1, pageSize = 10 }: PaginationParams) {
    const totalItems = this.sampleData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const data = this.sampleData.slice(start, end);

    return {
      data,
      page: page,
      pageSize: pageSize,
      totalPages,
      totalItems,
    };
  }
}
