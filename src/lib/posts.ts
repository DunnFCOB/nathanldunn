import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;         // ISO string e.g. "2026-05-12"
  excerpt: string;
  category?: string;
  readingTime: string;  // e.g. "6 min read"
}

export interface Post extends PostMeta {
  content: string;      // raw MDX source
}

/** Return all posts sorted newest-first. */
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        category: data.category ?? undefined,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Return a single post by slug. */
export function getPostBySlug(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? undefined,
    readingTime: readingTime(content).text,
    content,
  };
}

/** Format "2026-05-12" → "May 12, 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
