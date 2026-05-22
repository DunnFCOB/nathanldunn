import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Jane Doe",
};

export default function About() {
  return (
    <div className="site-layout">
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>About</h1>
        <div className={`${styles.body} prose`}>
          <p>
            I'm a writer, researcher, and advocate based in Detroit, Michigan.
            My work lives at the intersection of climate, civic technology, and
            local policy — the unglamorous machinery that shapes everyday life.
          </p>
          <p>
            I've spent the better part of a decade embedded in communities and
            organizations trying to close the gap between good ideas and durable
            change. Sometimes that looks like reporting. Sometimes it looks like
            building software. Often it looks like showing up to long meetings.
          </p>
          <p>
            This site is where I think out loud. You'll find essays, notes from
            the field, and occasional long reads on things I'm trying to
            understand.
          </p>
        </div>
      </div>
    </div>
  );
}
