import { useEffect, useMemo, useState } from "react";
import type { Contribution } from "../types";
import portfolio from "../data/portfolio.json";
import { getExprTime } from "../libs/utils";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
    const [pulseLoading, setPulseLoading] = useState<boolean>(false);
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [weeks, setWeeks] = useState<Contribution[][]>([]);

    const totalContributions = useMemo(() => contributions.reduce((p, c) => c.count + p, 0), [contributions]);

    const levelOpacity: number[] = [0.15, 0.35, 0.55, 0.75, 1];

    function buildWeeks(contributions: Contribution[]): Contribution[][] {
        const weeks: Contribution[][] = [];

        for (let i = 0; i < contributions.length; i += 7) {
            weeks.push(contributions.slice(i, i + 7));
        }

        return weeks;
    }


    useEffect(() => {
        const load = async () => {
            setPulseLoading(true);
            const res = await fetch(
                "https://github-user-contribution.platane.workers.dev/github-user-contribution/mhs003",
            );

            if (!res.ok) {
                setWeeks([]);
                return;
            }

            const json: Contribution[] = await res.json();
            setContributions(json);
            const grouped = buildWeeks(json);

            setWeeks(grouped);
            setPulseLoading(false);
        };

        load();
    }, []);

    return (
        <>
            <section className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                    <div className="flex justify-start items-center gap-4 mb-8">
                        <img className="w-20 rounded-full" src="https://avatars.githubusercontent.com/u/49614333?v=4" />
                        <div className="flex flex-col justify-center items-start">
                            <h2 className="text-xl font-bold">Monzurul Hasan</h2>
                            <a href="https://github.com/mhs003" target="_blank" className="text-muted hover:underline font-semibold text-sm">@mhs003</a>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tighter text-main">
                        Backend Programmer &{" "}
                        <span className="italic text-muted font-normal underline decoration-emerald/30">
                            Reverse Engineer
                        </span>
                    </h1>
                    <p className="text-muted max-w-lg leading-relaxed text-sm">
                        Specializing in high-performance extraction systems,
                        reverse engineering complex APIs, and building
                        monochromatic interfaces that focus on density and
                        speed.
                    </p>
                </div>

                <div className="border border-border bg-card/50 p-6 space-y-4 relative overflow-hidden group">
                    <div className="flex items-center justify-between">
                        <span className="mono text-xs text-muted uppercase tracking-widest">
                            Available
                        </span>
                        <div className="h-2 w-2 bg-emerald rounded-full animate-pulse shadow-[0_0_8px_var(--color-emerald)]"></div>
                    </div>
                    <p className="mono text-xs text-main italic">
                        Open for freelance & strategic collaborations.
                    </p>
                    <a href={"mailto:" + portfolio.email}>
                        <button className="cursor-pointer w-full bg-main text-bg py-2 text-xs font-bold hover:bg-emerald transition-colors uppercase tracking-tighter">
                            Contact ME
                        </button>
                    </a>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-12 pt-6">
                <div className="space-y-6">
                    <h3 className="mono text-xs uppercase tracking-[0.3em] text-muted font-bold px-2 border-l-2 border-emerald">
                        Experience
                    </h3>
                    <div className="space-y-4 cursor-default">
                        {portfolio.experiences.map((ex, i) => (
                            <div
                                key={i}
                                className="border-l border-border pl-4 py-2 hover:border-emerald-muted transition-colors group"
                            >
                                <span className="mono text-xs text-muted">
                                    {getExprTime(ex.from)}{" "}—{" "}
                                    {getExprTime(ex.to)}
                                </span>
                                <h4 className="font-bold text-sm text-main group-hover:text-emerald transition-colors">
                                    {ex.role} @ {ex.company}
                                </h4>
                                <p className="text-xs text-muted mt-1 italic">
                                    {ex.contribution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="mono text-xs uppercase tracking-[0.3em] text-muted font-bold px-2 border-l-2 border-emerald">
                        Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {portfolio.skills.map(
                            (skill, i) => (
                                <div
                                    key={i}
                                    className="bg-card border border-border p-3 flex justify-between items-center group hover:border-emerald-muted transition-all"
                                >
                                    <span className="mono text-xs text-main">
                                        {skill}
                                    </span>
                                    <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse"></span>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="mono text-xs uppercase tracking-[0.3em] text-muted font-bold">
                        Projects
                    </h3>
                    <div className="h-px grow ml-6 bg-border opacity-50"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-1">
                    {portfolio.projects.map((pro, i) => (
                        <a
                            key={i}
                            href={pro.url}
                            target="_blank"
                            className="group bg-card/50 border border-border p-6 hover:border-emerald-muted transition-all relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="h-6 w-6 border border-emerald/50 flex items-center justify-center">
                                    <div className="h-1 w-1 bg-emerald group-hover:scale-[2.5] transition-transform"></div>
                                </div>
                                <span className="mono text-[11px] text-muted uppercase font-bold tracking-widest">
                                    {pro.lang}
                                </span>
                            </div>
                            <h4 className="font-bold tracking-tight text-main group-hover:text-emerald transition-colors">
                                {pro.name}
                            </h4>
                            <p className="text-[11px] text-muted mt-2 leading-relaxed italic">
                                {pro.description}
                            </p>
                        </a>
                    ))}
                    <a
                        href="https://github.com/mhs003?tab=repositories"
                        target="_blank"
                        className="group flex gap-1 justify-center items-center bg-card/50 border border-border p-6 hover:border-emerald-muted transition-all relative overflow-hidden"
                    >
                        <span className="relative text-muted group-hover:text-emerald transition-[right] right-0 group-hover:right-0.5">More on Github</span> <ArrowRight className="relative text-muted transition-[left] left-0 group-hover:left-0.5 group-hover:text-emerald" size={18} />
                    </a>
                </div>
            </section>

            <section className="space-y-6 pb-20">
                <div className="flex items-center justify-between">
                    <h3 className="mono text-xs uppercase tracking-[0.3em] text-muted font-bold">
                        Github Pulse
                    </h3>
                    <div className="h-px grow ml-6 bg-border opacity-50"></div>
                </div>
                <div className="bg-card/50 border border-border p-6 relative">
                    {pulseLoading && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-5 flex justify-center items-center">
                            <span className="relative flex size-4">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex size-4 rounded-full bg-emerald-500"></span>
                            </span>
                        </div>
                    )}
                    <div className="flex justify-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="flex flex-col gap-1">
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        className="h-3 w-3 bg-emerald-500 rounded-[1px]"
                                        style={{
                                            opacity: levelOpacity[day.level],
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center border-t border-border pt-4">
                        <p className="mono text-xs text-muted">
                            {totalContributions} commits in last year
                        </p>
                        <a
                            target="_blank"
                            href="https://github.com/mhs003"
                            className="mono text-[11px] text-emerald hover:text-emerald-hover font-bold uppercase tracking-[0.2em] transition-colors"
                        >
                            VIEW PROFILE
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
