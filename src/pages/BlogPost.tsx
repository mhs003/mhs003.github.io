import { useParams } from "react-router";
import { posts } from "../posts";
import type { Post } from "../types";

export default function BlogPost() {
    const { slug } = useParams();

    const post = posts.find((e: Post) => e.meta.slug === slug);
    if (!post) return <>404</>;

    return (
        <article>
            <post.element />
        </article>
    );
}
