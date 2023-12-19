import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateBookDTO,
  ResponseCreateBookDTO,
  ResponseGetBooksDTO,
} from './books.dto';
import { CreateBookValidation } from './books.validation';
import { ZodValidate } from 'src/zod.validate';
import { CustomError } from 'src/custom.error';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookDTO): Promise<ResponseCreateBookDTO> {
    const { name, year, author, summary, publisher, page_count } = ZodValidate(
      CreateBookValidation,
      data,
    );

    const book = await this.prisma.book.count({
      where: {
        name,
      },
      select: {
        name: true,
      },
    });

    if (book.name) {
      throw new CustomError(400, 'name already exists');
    }

    const { book_id } = await this.prisma.book.create({
      data: {
        name,
        year,
        author,
        summary,
        publisher,
        page_count,
      },
      select: {
        book_id: true,
      },
    });

    return {
      book_id,
      name,
      year,
      author,
      summary,
      publisher,
      page_count,
    };
  }

  getBooks(page: number = 1): Promise<ResponseGetBooksDTO[]> {
    const size: number = 10;

    const skip = page != 0 ? (page - 1) * size : (1 - 1) * size;

    return this.prisma.book.findMany({
      select: {
        book_id: true,
        name: true,
        author: true,
        summary: true,
        publisher: true,
        year: true,
        page_count: true,
        created_at: true,
      },
      take: size,
      skip,
    });
  }
}
