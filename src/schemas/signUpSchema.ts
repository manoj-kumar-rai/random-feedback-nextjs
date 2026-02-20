import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must contain atleast 2 characters")
    .max(20, "Username should should not be longer than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, 'Username should not contain special characters');

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(8, {message: "Password must be 8 characters long"})
})