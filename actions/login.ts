"use server";

import { LoginSchema, RegisterSchema } from '@/app/schemas';
import * as z from 'zod';

export const login = async (values:z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if(!validatedFields.success) {
        return {error:"Invalid fields"};
    }

    return {success:"Email sent"};
}

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success) {
        return {error:"Invalid fields"};
    }

    return {success:"Email sent"};
}
