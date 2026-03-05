import { NavLink } from "react-router";
import ThemeToggle from "./theme-toggle";
import { Github } from "lucide-react";

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
            <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-4">
                <div className="items-center gap-4 hidden md:flex">
                    <div className="h-2 w-20 bg-border"></div>
                </div>
                <div className="flex w-full md:w-auto justify-center items-center gap-6">
                    <ThemeToggle />
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "mono text-xs uppercase tracking-widest text-main border-b border-emerald"
                                : "mono text-xs uppercase tracking-widest text-muted hover:text-muted-hover transition-colors"
                        }
                    >
                        Feed
                    </NavLink>
                    <NavLink
                        to="/mood"
                        className={({ isActive }) =>
                            isActive
                                ? "mono text-xs uppercase tracking-widest text-main border-b border-emerald"
                                : "mono text-xs uppercase tracking-widest text-muted hover:text-muted-hover transition-colors"
                        }
                    >
                        Mood
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive
                                ? "mono text-xs uppercase tracking-widest text-main border-b border-emerald"
                                : "mono text-xs uppercase tracking-widest text-muted hover:text-muted-hover transition-colors"
                        }
                    >
                        Portfolio
                    </NavLink>
                    <a
                        href="https://github.com/mhs003"
                        target="_blank"
                        className="mono text-xs uppercase tracking-widest cursor-pointer text-muted hover:text-emerald transition-colors"
                    >
                        <Github size={16} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
