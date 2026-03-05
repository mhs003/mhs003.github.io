export type Contribution = {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
}

export type ContributionsResponse = {
    total: Record<string, number>
    contributions: Contribution[]
}

export type PostMeta = {
    mins: string|number,
    date: string;
    slug: string;
    title: string;
    short_description: string;
    tags: Array<string>;
}

export type Post = {
    meta: PostMeta;
    element: () => React.ReactNode;
}