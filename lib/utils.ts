import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours() + 10).padStart(2, "0"); // Adjust for the +10 hours difference to get 19:33 from 09:33
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} - ${hours}:${minutes}`;
};
