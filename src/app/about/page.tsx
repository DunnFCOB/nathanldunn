import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Nathan Dunn",
};

export default function About() {
  return (
    <div className="site-layout">
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>About</h1>
        <div className={`${styles.body} prose`}>
          <p>
            I'm a full-time finance professional based in Central Ohio, and I spend most of my time analyzing complex data and information, identifying patterns, and mitigating risk before problems arise. 
          </p>
          <p>
            To get where I am today, I graduated from The Ohio State University in 2020 with a Bachelor's of Science in Business Administration, specializing in Accounting, from the Fisher College of Business. 
          </p>
          <p>
            Outside of work, I've spent the last few years also being an advocate for and becoming more involved in the Jewish community. From those efforts, I've heard from and met so many interesting and prominent members of the community, and I've been inspired to share some of the knowledge, wisdom, and insights I've gained along the way.
          </p>
          <p>
            This site is where I think out loud. You'll find essays, off the cuff notes, and occasional reports/analyses on things I'm applying my professional expertise toward to better understand and communicate complex ideas.
          </p>
        </div>
        <div className={styles.contact}>
          <h2 className={styles.contactHeading}>Get in touch</h2>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:me@nathanldunn.com" className={styles.contactLink}>me@nathanldunn.com</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Substack</span>
              <a href="https://substack.com/@nathanldunn" className={styles.contactLink} target="_blank" rel="noopener noreferrer">@nathanldunn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
