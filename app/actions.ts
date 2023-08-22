"use server";

import { revalidatePath } from "next/cache";

let i = 0;

export async function read() {
  return i;
}

export async function update() {
  i++;
  // revalidatePath("/asdf/asdf/asdf");
}
