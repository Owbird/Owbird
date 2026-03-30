import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const name = "Obed D. A. Forkuo"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
