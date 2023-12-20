import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './books.dto';
import { CustomException } from 'src/errors/custom.exception';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() book: CreateBookDTO) {
    try {
      const data = await this.booksService.createBook(book);

      return {
        success: true,
        data,
      };
    } catch (error) {
      throw new CustomException(error);
    }
  }

  @Get()
  async getBooks(@Query('page') page) {
    try {
      const data = await this.booksService.getBooks(page);

      return {
        success: true,
        data,
      };
    } catch (error) {
      throw new CustomException(error);
    }
  }
}
