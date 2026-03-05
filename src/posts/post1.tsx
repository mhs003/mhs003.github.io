import PostHeader from "../components/post-header";
import type { PostMeta } from "../types";
import PostFooter from "../components/post-footer";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: PostMeta = {
    mins: 4,
    date: "2026.03.06",
    slug: "cloudflare-vite-nextjs-reimplementation",
    title: "Cloudflare's Vite-Powered Next.js Reimplementation",
    short_description:
        "Built mostly by AI in one week, Vinext delivers dramatically faster builds, much smaller bundles, and one-command deploys to Workers—while keeping your Next.js code mostly unchanged.",
    tags: ["NEXTJS", "VITE", "CLOUDFLARE", "WORKERS", "REACT"],
};

export default function Post() {
    return (
        <>
            <PostHeader meta={meta} />

            <div className="space-y-7 text-main leading-relaxed">
                <p className="text-lg opacity-90 italic border-l-3 border-emerald/40 pl-5">
                    Cloudflare took the Next.js API surface, handed its contract
                    and test suite to Claude, and in under a week had a working
                    alternative built on Vite. The result is faster, leaner, and
                    deploys natively to Workers.
                </p>

                <p>
                    Vinext (pronounced "vee-next") isn't a fork of Next.js, nor
                    is it yet another adapter that tries to shoehorn Turbopack
                    output onto other platforms. It's a clean reimplementation
                    of Next.js's public API—App Router, Pages Router, SSR, React
                    Server Components, server actions, middleware, caching,{" "}
                    <code>next/*</code> imports—all as a Vite plugin.
                </p>

                <p>
                    Your <code>app/</code> and <code>pages/</code> directories
                    stay the same. You install <code>vinext</code>, swap{" "}
                    <code>next</code> for <code>vinext</code> in your
                    package.json scripts, and you're mostly good to go. The dev
                    server runs in workerd (Cloudflare's runtime), so you get
                    native access to KV, Durable Objects, and Workers AI
                    bindings without polyfills or hacks.
                </p>

                <h2 className="text-2xl font-bold tracking-tight mt-12 mb-5 border-b border-border/50 pb-2">
                    Performance That Actually Matters
                </h2>

                <p>
                    On a real-world-ish 33-route App Router benchmark (shared
                    codebase, no static pre-rendering forced):
                </p>

                <ul className="list-disc pl-6 space-y-2 text-base">
                    <li>
                        Build time (production): Next.js 16 with Turbopack →{" "}
                        <strong>7.38s</strong>
                        <br />
                        Vinext (Vite 8 + Rolldown) → <strong>1.67s</strong>{" "}
                        (~4.4× faster)
                    </li>
                    <li>
                        Client bundle size (gzipped): Next.js →{" "}
                        <strong>168.9 KB</strong>
                        <br />
                        Vinext → <strong>~73 KB</strong> (~57% smaller)
                    </li>
                </ul>

                <p className="mt-4 text-sm opacity-80">
                    These are compilation + bundling numbers only (benchmarks
                    exclude serving time). Full results and methodology live at
                    benchmarks.vinext.workers.dev. Rolldown (Rust-based bundler
                    in Vite 8) is doing the heavy lifting here.
                </p>

                <h2 className="text-2xl font-bold tracking-tight mt-12 mb-5 border-b border-border/50 pb-2">
                    One-Command Deploy + Smart Caching
                </h2>

                <p>Deployment is dead simple:</p>

                <pre>
                    vinext deploy
                </pre>

                <p>
                    It builds, generates the Worker config, and pushes
                    everything live. ISR uses KV by default (pluggable—swap in
                    R2 or Cache API if you want). Server actions and middleware
                    just work.
                </p>

                <h2 className="text-2xl font-bold tracking-tight mt-12 mb-5 border-b border-border/50 pb-2">
                    The Experimental Killer Feature: Traffic-Aware Pre-Rendering
                </h2>

                <p>
                    Most Next.js apps have a classic long-tail problem:
                    thousands of dynamic routes, but 90% of traffic hits maybe
                    100–200 pages. Pre-rendering everything at build time is
                    wasteful and slow.
                </p>

                <p>
                    Vinext's experimental <strong>TPR</strong> (Traffic-aware
                    Pre-Rendering) fixes that:
                </p>

                <ul className="list-disc pl-6 space-y-1.5">
                    <li>
                        At deploy, it pulls the last 24h of zone analytics from
                        Cloudflare.
                    </li>
                    <li>Identifies the hot paths that cover most traffic.</li>
                    <li>
                        Pre-renders and caches only those (e.g., 184 pages in
                        ~8s).
                    </li>
                    <li>Everything else falls back to on-demand SSR + ISR.</li>
                </ul>

                <p className="mt-4">Try it with:</p>

                <pre>
                    vinext deploy --experimental-tpr
                </pre>

                <p className="mt-6 opacity-85">
                    No more writing <code>generateStaticParams()</code> for huge
                    sites. Build time scales with traffic, not route count. It's
                    still experimental, but the direction is very promising.
                </p>

                <p className="opacity-85 mt-8">
                    Cloudflare open-sourced it at github.com/cloudflare/vinext.
                    The repo is clear: this is experimental, mostly AI-written
                    code, use with caution. But it already runs real production
                    sites (like parts of cio.gov), and the benchmarks hold up.
                </p>

                <p className="opacity-80">
                    Whether Vinext becomes a serious Next.js alternative or just
                    a fascinating proof-of-concept, it shows how fast the game
                    is moving in 2026. One engineer, $1,100 in tokens, and a
                    week—and suddenly the cost of reimplementing a major
                    framework API looks very different.
                </p>
            </div>

            <PostFooter slug={meta.slug} />
        </>
    );
}
