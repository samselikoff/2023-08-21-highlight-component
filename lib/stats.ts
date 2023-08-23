"use server";

import { revalidatePath } from "next/cache";

let stats = {
  visitors: 10320,
  customers: 4628,
  orders: 2980,
};

export async function getStats() {
  return stats;
}

export async function refreshStats() {
  stats.visitors = stats.visitors + 1;
  revalidatePath("/");
}
