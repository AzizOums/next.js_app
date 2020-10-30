import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

interface IButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

const MyButton: React.FC<IButtonProps> = ({ text, onClick }: IButtonProps) => {
  return (
    <button className={styles.card} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

const MyPage: React.FC<{}> = () => {
  const [state, setState] = useState({ counter: 0 });

  const { counter } = state;
  return (
    <div className={styles.container}>
      <Head>
        <title>My Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Page</h1>

        <p className={styles.description}>
          This is my first page created using <code>Next.js</code>
        </p>

        <div className={styles.grid}>
          <MyButton
            text="Décrementer"
            onClick={() => {
              setState({ counter: counter - 1 });
            }}
          />
          <MyButton
            text="Incrementer"
            onClick={() => {
              setState({ counter: counter + 1 });
            }}
          />
        </div>
        <p>Compteur: {counter}</p>
      </main>

      <footer className={styles.footer}>
        <p>Created by Aziz</p>
      </footer>
    </div>
  );
};

export default MyPage;
