import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href='https://nextjs.org'>Next.js!</a>
            </h1>
        </main>
    );
}
