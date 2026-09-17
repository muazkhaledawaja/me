import type { Post } from "./types";

// Zero posts exist. The Writing organism renders null when this is empty,
// and app/sitemap.ts skips writing routes entirely. Publishing later = add
// one object here. See plan §4(a) — no "coming soon" placeholder.
export const posts: Post[] = [];
