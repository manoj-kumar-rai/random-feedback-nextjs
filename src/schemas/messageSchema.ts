import {z} from 'zod';

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Message should must be 10 characters long"})
    .max(300, "Message should not contain more than 300 characters")
})