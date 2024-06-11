import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  console.log(date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0"); // Adjust for the +10 hours difference to get 19:33 from 09:33
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} - ${hours}:${minutes}`;
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  console.log(date);

  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()]; // Get the month name
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
