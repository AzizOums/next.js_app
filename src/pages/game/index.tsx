import React, { useEffect, useState } from "react";

import { Spinner, Card, Row } from "react-bootstrap";

import Head from "next/head";

import axios from "axios";

import styles from "../../styles/Home.module.css";

import RestartElement from "../../components/restartElement";
import Board from "../../components/board";

import { playerWins, check } from "../../utils.ts";

let word: string = "";
let charList: string[] = [];

const click = (e: string, setState): void => {
  const checked = check(word, charList, e);
  setState((prevState) => ({
    charList: charList,
    counter: checked ? prevState.counter : prevState.counter - 1,
    win: playerWins(word, charList),
    lose: checked ? false : prevState.counter - 1 <= 0,
  }));
};

const initialState = {
  charList: [],
  counter: 5,
  win: false,
  lose: false,
};

const Game: React.FC<{}> = () => {
  const [restart, setRestart] = useState(false);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(process.env.API_URL);
    axios
      .get(`api/random_word`)
      .then((res) => {
        word = res.data.word;
        charList = res.data.charList;
        console.log(word);
        setState({ ...initialState, charList });
      })
      .catch((err) => console.log(err.message));
  }, [setRestart, restart]);

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
        <Card bg="secondary" style={{ width: "98%", maxWidth: 700 }}>
          <Card.Header>
            <Row
              style={{
                justifyContent: "center",
                fontSize: 30,
                alignItems: "center",
              }}
            >
              {!word ? (
                <>
                  <Spinner
                    animation="border"
                    variant="primary"
                    style={{ fontSize: 15 }}
                  />
                  &nbsp; Loading
                </>
              ) : state.lose ? (
                word
              ) : (
                charList.join(" ")
              )}
            </Row>
          </Card.Header>
          <Card.Body>
            {state.win || state.lose ? (
              <RestartElement
                win={state.win}
                click={() => {
                  setRestart(!restart);
                }}
              />
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
