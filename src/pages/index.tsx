import Head from "next/head";
import styles from "../styles/Home.module.css";

const home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenu !</h1>

        <div className={styles.grid}>
          <a href="/game" className={styles.card}>
            Jouer au jeu du pendu
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Created by Aziz</footer>
    </div>
  );
};

export default home;
