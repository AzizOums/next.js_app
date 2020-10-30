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
        <h1 className={styles.title}>Welcome !</h1>

        <div className={styles.grid}>
          <a href="http://localhost:3000/mypage" className={styles.card}>
            <h3>Mypage</h3>
          </a>

          <a href="http://localhost:3000/game" className={styles.card}>
            <h3>Game</h3>
            <p>Jouer au jeu du pendu</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default home;
