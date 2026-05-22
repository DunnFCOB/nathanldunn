import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import styles from "./page.module.css";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} — Jane Doe`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="site-layout">
      <article className={styles.article}>
        <header className={styles.header}>
          <p className="section-label">
            {post.category && `${post.category} · `}
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className={styles.title}>{post.title}</h1>
          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}
        </header>
        <div className={`${styles.body} prose`}>
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
