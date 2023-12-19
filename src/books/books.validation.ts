import { z } from 'zod';

export const CreateBookValidation = z.object({
  name: z.string().trim().min(1),
  year: z.number().positive(),
  author: z.string().trim().min(1),
  summary: z.string().trim().min(1),
  publisher: z.string().trim().min(1),
  page_count: z.number().positive(),
});
