"use server";

import { LoginSchema, RegisterSchema } from "@/app/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent" };
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exisitingUser = await getUserByEmail(email);

  if (exisitingUser) {
    return { error: "User already exists" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

//   todo: send email

  return { success: "User created" };
};
