import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO, DeleteBookDTO } from './books.dto';
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
      const {
        data,
        total_item,
        total_page,
        page: requestPage,
      } = await this.booksService.getBooks(page);

      return {
        success: true,
        data,
        page: Number(requestPage),
        total_page,
        total_item,
      };
    } catch (error) {
      throw new CustomException(error);
    }
  }

  @Delete()
  async deleteBook(@Body() body: DeleteBookDTO) {
    try {
      await this.booksService.deleteBook(body);

      return {
        success: true,
        message: 'delete book successfully',
      };
    } catch (error) {
      throw new CustomException(error);
    }
  }
}
