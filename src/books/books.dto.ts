export class CreateBookDTO {
  name: string;
  year: number;
  author: string;
  summary: string;
  publisher: string;
  page_count: number;
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
  book_id: string;
  name: string;
  year: number;
  author: string;
  summary: string;
  publisher: string;
  page_count: number;
  created_at: Date;
}
