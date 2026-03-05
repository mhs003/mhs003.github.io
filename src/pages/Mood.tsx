import moods from "../data/moods.json";

export default function Mood() {
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
                {moods.map((mood) => (
                    <div key={mood.timestamp + mood.content} className="group relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="mono text-[11px] text-muted opacity-50">
                                {mood.timestamp}
                            </span>
                        </div>

                        <div
                            className={`text-xl md:text-2xl whitespace-pre-line tracking-tight leading-snug ${mood.classes} transition-all border-emerald`}
                        >
                            {mood.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
