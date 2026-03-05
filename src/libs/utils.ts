import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function parseDate(dateStr: string) {
    const parsed = Date.parse(dateStr);
    return isNaN(parsed) ? null : new Date(parsed);
}

export function getMonth(parsedDate: Date, small = false) {
    const months = [
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
    const month = months[parsedDate.getMonth()];
    return small ? month.slice(0, 3) : month;
}

export function getExprTime(dateStr: string | null) {
    if (!dateStr) return "Present";
    const parsed = parseDate(dateStr);
    if (!parsed) return "~";
    const date = parsed.getDate();
    const month = getMonth(parsed, true);
    const year = parsed.getFullYear();
    return `${date} ${month}, ${year}`;
}
