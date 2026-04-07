// https://github.com/lukeed/clsx
import { clsx, type ClassValue } from 'clsx';

// https://github.com/dcastil/tailwind-merge
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export default cn;
