import type { PostMeta } from "../types";

export default function PostHeader({ meta }: { meta: PostMeta }) {
    return (
        <div className="mb-10">
            <div className="flex flex-col gap-4">
                <div className="w-full flex justify-between items-center bg-emerald-subtle/40 p-1">
                    <span className="inline-flex items-center mono italic text-xs text-muted">
                        <span className="inline-block h-6 w-0.5 bg-emerald mr-1.5"></span>
                        {meta.mins} mins read
                    </span>
                    <span className="mono text-xs text-muted mr-1.5">
                        {meta.date}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter italic leading-tight uppercase">
                    {meta.title}
                </h1>

                <div className="flex gap-4 flex-wrap">
                    {meta.tags.map((t, i) => (
                        <span
                            key={i}
                            className="mono text-xs text-muted uppercase"
                        >
                            #{t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
