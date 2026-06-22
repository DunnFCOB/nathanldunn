import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const secondary = rest.slice(0, 2);
  const latest = posts.slice(0, 4);

  return (
    <div className={styles.pageWrap}>

      {/* ── Left sidebar ── */}
      <aside className={styles.leftSidebar}>
        <div className={styles.siteId}>
          <h1 className={styles.siteName}>Nathan Dunn</h1>
          <p className={styles.siteTagline}>Making sense of complex topics and events.</p>
        </div>
        <p className={styles.bio}>
          Analyzing the world and current events with the expertise of professional finance and the wisdom of a people thousands of years old — based in Central Ohio.
        </p>
        <img src="/images/profile.jpeg" alt="photo of Nathan Dunn" className={styles.photo} />
      </aside>

      {/* ── Center column ── */}
      <main className={styles.center}>
        {featured && (
          <article className={styles.featured}>
            <p className={styles.featMeta}>
              {featured.category && <span>{featured.category} · </span>}
              {formatDate(featured.date)} · {featured.readingTime}
            </p>
            <Link href={`/writing/${featured.slug}`}>
              <h1 className={styles.featTitle}>{featured.title}</h1>
            </Link>
            <p className={styles.featExcerpt}>{featured.excerpt}</p>
            <Link href={`/writing/${featured.slug}`} className={styles.readMore}>
              read more
            </Link>
          </article>
        )}

        {secondary.length > 0 && (
          <div className={styles.cardGrid}>
            {secondary.map((post) => (
              <article key={post.slug} className={styles.card}>
                <p className={styles.cardMeta}>
                  {post.category && `${post.category} · `}{formatDate(post.date)}
                </p>
                <Link href={`/writing/${post.slug}`}>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                </Link>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <Link href={`/writing/${post.slug}`} className={styles.readMore}>
                  read more
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* ── Right sidebar ── */}
      <aside className={styles.rightSidebar}>
        <p className={styles.latestLabel}>latest posts</p>
        <ul className={styles.latestList}>
          {latest.map((post) => (
            <li key={post.slug} className={styles.latestItem}>
              <Link href={`/blog/${post.slug}`} className={styles.latestTitle}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

    </div>
  );
}
