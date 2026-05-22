import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="site-layout">
      <div className="page-grid">

        {/* ── Main column ── */}
        <div className={styles.main}>

          {featured && (
            <section className={styles.featured}>
              <p className="section-label">Featured</p>
              <Link href={`/blog/${featured.slug}`}>
                <h1 className={styles.featTitle}>{featured.title}</h1>
              </Link>
              <p className={styles.featExcerpt}>{featured.excerpt}</p>
              <p className={styles.featMeta}>
                {featured.category && <span>{featured.category} · </span>}
                {formatDate(featured.date)} · {featured.readingTime}
              </p>
            </section>
          )}

          {rest.length > 0 && (
            <section>
              <div className="rule" />
              <p className="section-label">More writing</p>
              <ul className={styles.postList}>
                {rest.map((post) => (
                  <li key={post.slug} className={styles.postItem}>
                    <Link href={`/blog/${post.slug}`} className={styles.postTitle}>
                      {post.title}
                    </Link>
                    <span className={styles.postDate}>
                      {formatDate(post.date)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          <div className={styles.sbBlock}>
            <p className="section-label">About</p>
            <p className={styles.sbBio}>
              Writer, researcher, and advocate exploring climate, civic life,
              and what it means to build things in public — from Detroit.
            </p>
          </div>
          <div className={styles.sbBlock}>
            <p className="section-label">Location</p>
            <p className={styles.sbDetail}>Detroit, Michigan</p>
          </div>
          <div className={styles.sbBlock}>
            <p className="section-label">Interests</p>
            <p className={styles.sbDetail}>
              Climate<br />Civic tech<br />Local policy<br />Open data
            </p>
          </div>
          <div className={styles.sbBlock}>
            <p className="section-label">Writing since</p>
            <p className={styles.sbDetail}>2018</p>
          </div>
        </aside>

      </div>
    </div>
  );
}
