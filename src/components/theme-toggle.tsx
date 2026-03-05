import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <button className="cursor-pointer text-muted hover:text-emerald transition-colors" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}
