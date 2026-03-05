import { Link } from "react-router";
import { posts } from "../posts";

export default function Feeds() {
    return (
        <>
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tighter italic italic-style mb-2">
                    Technical Dispatches
                </h1>
                <p className="mono text-xs text-muted uppercase tracking-widest">
                    Latest feeds from the edge.
                </p>
            </div>

            <div className="space-y-1">
                {posts.map((post, i) => (
                    <Link className="block" to={`/post/${post.meta.slug}`} key={i}>
                        <article className="group relative bg-card/50 border border-border hover:border-border-hover p-6 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-full flex justify-between items-center bg-emerald-subtle/40">
                                    <span className="inline-flex items-center mono italic text-xs text-muted">
                                        <span className="inline-block h-6 w-0.5 bg-emerald mr-1.5"></span>
                                        {post.meta.mins} mins read
                                    </span>
                                    <span className="mono text-xs text-muted mr-1.5">
                                        {post.meta.date}
                                    </span>
                                </div>
                            </div>

                            <div className="block space-y-2">
                                <h2 className="text-xl font-bold group-hover:text-emerald transition-colors tracking-tight">
                                    {post.meta.title}
                                </h2>
                                <p className="text-muted text-sm leading-relaxed line-clamp-2">
                                    {post.meta.short_description}
                                </p>
                            </div>
                            <div className="mt-6 flex gap-3 flex-wrap">
                                {post.meta.tags.map((t, i) => (
                                    <span
                                        key={i}
                                        className="mono text-xs text-muted uppercase"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </>
    );
}
