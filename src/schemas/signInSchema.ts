import { z } from "zod";

export const verifySignInSchema = z.object({
    identifier: z.string(),
    password: z.string()
})