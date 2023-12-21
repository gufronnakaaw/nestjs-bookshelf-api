export class CreateBookDTO {
  name: string;
  year: number;
  author: string;
  summary: string;
  publisher: string;
  page_count: number;
}

export class DeleteBookDTO {
  book_id: string;
}

export class ResponseCreateBookDTO {
  book_id: string;
  name: string;
  year: number;
  author: string;
  summary: string;
  publisher: string;
  page_count: number;
}

export class ResponseGetBooksDTO {
  data: {
    book_id: string;
    name: string;
    year: number;
    author: string;
    summary: string;
    publisher: string;
    page_count: number;
    created_at: Date;
  }[];
  page: number;
  total_page: number;
  total_item: number;
}
