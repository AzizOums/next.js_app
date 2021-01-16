import React, { useState } from "react";

import { Card, Row } from "react-bootstrap";

import Head from "next/head";

import styles from "../../styles/Home.module.css";

import RestartElement from "../../components/restartElement";
import Board from "../../components/board";

import { getRandomWord, playerWins, check } from "../../utils.ts";

let word: string = "";
let charList: string[] = [];

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Pendu</title>
      </Head>

      <main className={styles.main}>
        <h1>Bienvenu dans le jeu du pendu</h1>
        <p style={{ textAlign: "center", fontSize: 20 }}>
          Vous devez deviner un mot tiré au sort parmis une liste de noms de
          superheros et de personnages de mangas. Avec le moins de tentatives
          possible !
        </p>
        <Card bg="secondary" style={{ width: "90%", maxWidth: 700 }}>
          <Card.Header>
            <Row style={{ justifyContent: "center", fontSize: 50 }}>
              {state.lose ? word : charList.join(" ")}
            </Row>
          </Card.Header>
          <Card.Body>
            {state.win || state.lose ? (
              <Row style={{ justifyContent: "center" }}>
                <RestartElement
                  win={state.win}
                  click={() => restart(setState)}
                />
              </Row>
            ) : (
              <>
                <Board
                  click={(e) => {
                    click(e, setState);
                  }}
                />
                <Row style={{ justifyContent: "center" }}>
                  Essaies restants: {state.counter}
                </Row>
              </>
            )}
          </Card.Body>
        </Card>
      </main>

      <footer className={styles.footer}>
        <div>Created by Aziz</div>
      </footer>
    </div>
  );
};

export default Game;
