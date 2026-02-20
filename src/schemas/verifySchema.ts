import { z } from "zod";

export const verifySchema = z.object({
    code: z.string().length(6, 'Verification code must be of 6 characters').max(6, 'Verification code should not contain more than 6 characters')
    
})