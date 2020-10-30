import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import Board from "../../components/board";
import RestartElement from "../../components/restartElement";
import tools from "../../tools";

let { getRandomWord, playerWins, check } = tools;

//fonctions du jeu
const wordList: string[] = [
  "spiderman",
  "batman",
  "superman",
  "ironman",
  "captainamerica",
  "hulk",
  "flash",
  "arrow",
  "naruto",
  "goku",
  "jotaro",
  "dio",
  "luffy",
  "sanji",
  "shanks",
];

let word: string;
let charList: string[];

const start = (): void => {
  const data = getRandomWord();
  charList = data.charList;
  word = data.word;
};

const click = (e: string, setState): void => {
  const checked = check(word, charList, e);
  setState((prevState) => ({
    charList: charList,
    counter: checked ? prevState.counter : prevState.counter - 1,
    win: playerWins(word, charList),
    lose: checked ? false : prevState.counter - 1 <= 0,
  }));
};

const restart = (setState): void => {
  start();
  setState({
    charList: charList,
    counter: 5,
    win: false,
    lose: false,
  });
};

start();

const Game: React.FC<{}> = () => {
  const [state, setState] = useState({
    charList: [],
    win: false,
    lose: false,
    counter: 5,
  });

  const jsx = !(state.win || state.lose) ? (
    <Board
      click={(e) => {
        click(e, setState);
      }}
    />
  ) : (
    <RestartElement win={state.win} click={() => restart(setState)} />
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Pendu</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenu dans le jeu du pendu</h1>

        <p className={styles.description}>
          Vous devez deviner un mot tiré au sort parmis une liste de noms de
          superheros et de personnages de mangas <br />
          Avec le moins de tentatives que possible !
        </p>
        <div>
          {jsx}
          <p>Essaies restants: {state.counter}</p>
          <p>Mot: {charList.join(" ")}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>Created by Aziz</div>
      </footer>
    </div>
  );
};

export default Game;
