import { ZodSchema } from 'zod';

export function ZodValidate<T>(schema: ZodSchema<T>, data: any) {
  return schema.parse(data);
}
