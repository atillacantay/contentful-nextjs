import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const clsxm = (...classes: ClassValue[]): string =>
  twMerge(clsx(...classes));
