import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Articles — Nathan Dunn",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="site-layout">
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Writing</h1>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link href={`/blog/${post.slug}`} className={styles.title}>
                {post.title}
              </Link>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <p className={styles.meta}>
                {post.category && <span>{post.category} · </span>}
                {formatDate(post.date)} · {post.readingTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
