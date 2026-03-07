import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function parseDate(dateStr: string) {
    const parsed = Date.parse(dateStr);
    return isNaN(parsed) ? null : new Date(parsed);
}

export function getDateTime(parsedDate: Date) {
    let hours = parsedDate.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours ? hours : 12;
    const min = parsedDate.getMinutes().toString().padStart(2, "0");
    const secs = parsedDate.getSeconds().toString().padStart(2, "0");
    return `${hours}:${min}:${secs} ${period}, ${parsedDate.toDateString()}`;
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

export function cssStringToJsxStyle(css: string): Record<string, string> {
    const style: Record<string, string> = {};

    css.split(";").forEach((rule) => {
        const [property, value] = rule.split(":");

        if (!property || !value) return;

        const camelKey = property
            .trim()
            .replace(/-([a-z])/g, (_, char) => char.toUpperCase());

        style[camelKey] = value.trim();
    });

    return style;
}
