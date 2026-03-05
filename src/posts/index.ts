import type { Post } from "../types";
import { default as Post1, meta as meta1 } from "./post1";
import { default as Post2, meta as meta2 } from "./post2";
import { default as Post3, meta as meta3 } from "./post3";

export const posts: Post[] = [
    {
        meta: meta3,
        element: Post3,
    },
    {
        meta: meta2,
        element: Post2,
    },
    {
        meta: meta1,
        element: Post1,
    },
];


export function previousPost(slug: string) {
    const this_post = posts.find((e) => e.meta.slug === slug);
    if (!this_post) return null;
    const this_post_index = posts.indexOf(this_post);
    if (this_post_index === posts.length - 1) return null;
    return posts[this_post_index + 1];
}
export function nextPost(slug: string) {
    const this_post = posts.find((e) => e.meta.slug === slug);
    if (!this_post) return null;
    const this_post_index = posts.indexOf(this_post);
    if (this_post_index === 0) return null;
    return posts[this_post_index - 1];
}