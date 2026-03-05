export default function Error404() {
    return (
        <main className="min-h-[60dvh] flex flex-col items-center justify-center p-6 text-center">
            <div className="relative mb-8">
                <h1 className="text-9xl font-bold tracking-tighter text-main opacity-10 select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl font-bold mono uppercase tracking-[0.3em] text-emerald animate-pulse">
                        Signal Lost
                    </h2>
                </div>
            </div>

            <div className="max-w-md space-y-6">
                <div className="bg-card border border-border p-4 mono text-xs text-left space-y-2 relative overflow-hidden">
                    <p className="text-muted italic">// Diagnostic Report:</p>
                    <p className="text-main underline decoration-emerald/40 tracking-tight">
                        Requested node is unreachable or has been purged from
                        the local cache.
                    </p>
                    <div className="pt-2 flex gap-4 text-muted">
                        <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-red-500 rounded-full"></span>
                            Status: Offline
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-emerald opacity-40 rounded-full"></span>
                            Trace: Active
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex gap-1 opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 w-1 ${i % 3 === 0 ? "bg-emerald" : "bg-border"}`}
                    ></div>
                ))}
            </div>
        </main>
    );
}
