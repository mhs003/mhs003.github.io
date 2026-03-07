import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";
import { cssStringToJsxStyle, getDateTime, parseDate } from "../libs/utils";
import type { Mood } from "../types";

export default function Mood() {
    const { apiMoods, loading } = useContext(AppDataContext);

    return (
        <>
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tighter italic italic-style mb-2">
                    Mood Override
                </h1>
                <p className="mono text-xs text-muted uppercase tracking-widest">
                    Unauthorized thought stream.
                </p>
            </div>

            <div className="space-y-12">
                {loading && (
                    <div className="flex justify-center items-center py-4">
                        <span className="relative flex size-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex size-4 rounded-full bg-emerald-500"></span>
                        </span>
                    </div>
                )}
                {apiMoods?.map((mood: Mood) => (
                    <div key={mood.id} className="group relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="mono text-[11px] text-muted opacity-50">
                                {getDateTime(parseDate(mood.createdAt)!)}
                            </span>
                        </div>

                        <div
                            className={`text-xl md:text-2xl whitespace-pre-line ${mood.classes} tracking-tight leading-snug transition-all border-emerald`}
                            style={
                                mood.styles
                                    ? cssStringToJsxStyle(mood.styles)
                                    : {}
                            }
                        >
                            {mood.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
