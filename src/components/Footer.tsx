import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} site-layout`}>
        <span className={styles.name}>Nathan Dunn</span>
        <span className={styles.copy}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}