import { Link } from "react-router";
import { nextPost, previousPost } from "../posts";

export default function PostFooter({ slug }: { slug: string }) {
    const prev = previousPost(slug);
    const next = nextPost(slug);
    return (
        <div className="mt-20 pt-10 border-t border-border">
            <div className="flex justify-between items-center mb-10 text-xs opacity-70 uppercase tracking-wider">
                <span>End</span>
                <div className="flex gap-3">
                    <div className="h-1 w-10 bg-emerald/70"></div>
                    <div className="h-1 w-4 bg-border/50"></div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {prev ? (
                    <Link
                        to={`/post/${prev.meta.slug}`}
                        className="group block bg-card/40 border border-border p-6 hover:border-emerald/60 transition-colors"
                    >
                        <span className="text-xs opacity-70 uppercase tracking-wider">
                            Previous
                        </span>
                        <h3 className="mt-2 text-lg font-semibold group-hover:text-emerald transition-colors">
                            ← {prev.meta.title}
                        </h3>
                    </Link>
                ) : <div></div>}

                {next && (
                    <Link
                        to={`/post/${next.meta.slug}`}
                        className="group block bg-card/40 border border-border p-6 hover:border-emerald/60 transition-colors md:text-right"
                    >
                        <span className="text-xs opacity-70 uppercase tracking-wider">
                            Next
                        </span>
                        <h3 className="mt-2 text-lg font-semibold group-hover:text-emerald transition-colors">
                            {next.meta.title} →
                        </h3>
                    </Link>
                )}
            </div>
        </div>
    );
}
