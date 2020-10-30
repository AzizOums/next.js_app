import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

//types des props et states des components
interface IProps {
  name: string;
}

interface IState {
  charList: string[];
  win: boolean;
  lose: boolean;
  compteur: number;
}

interface IButtonProps {
  text: string;
  onClick: (e: string) => void;
}

interface IBoardProps {
  click: (e: string) => void;
}

interface IRestartButtonProps {
  win: boolean;
  click: () => void;
}

interface IButtonState {
  disabled: boolean;
}

//components
class MyButton extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  render(): React.ReactNode {
    const { disabled } = this.state;
    const { text, onClick } = this.props;
    const jsx = disabled ? (
      <button disabled>
        <p>{text}</p>
      </button>
    ) : (
      <button
        onClick={() => {
          this.setState({ disabled: true });
          onClick(text);
        }}
      >
        <p>{text}</p>
      </button>
    );
    return jsx;
  }
}

const Board: React.FC<IBoardProps> = (props) => {
  const btn = getButtons(props.click);
  return (
    <div className={styles.card}>
      <div>
        {btn[0]} {btn[1]} {btn[2]} {btn[3]} {btn[4]} {btn[5]} {btn[6]} {btn[7]}{" "}
        {btn[8]} {btn[9]} {btn[10]} {btn[11]} {btn[12]}
      </div>
      <br />
      <div>
        {btn[13]} {btn[14]} {btn[15]} {btn[16]} {btn[17]} {btn[18]} {btn[19]}{" "}
        {btn[20]} {btn[21]} {btn[22]} {btn[23]} {btn[24]} {btn[25]}
      </div>
    </div>
  );
};

const RestartElement: React.FC<IRestartButtonProps> = (props) => {
  const { win, click } = props;
  return (
    <div>
      <p>Vous avez {win ? "Gagné" : "Perdu"} !</p>
      <MyButton text="recommencer" onClick={click} />
    </div>
  );
};

//classe representant le jeu
class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    start();
    this.state = {
      charList: charList,
      compteur: 5,
      win: false,
      lose: false,
    };
    this.click = this.click.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart(): void {
    start();
    this.setState({
      charList: charList,
      compteur: 5,
      win: false,
      lose: false,
    });
  }

  click(e: string): void {
    const checked = check(e);
    const { compteur } = this.state;
    this.setState({
      charList: charList,
      compteur: checked ? compteur : compteur - 1,
      win: playerWins(),
      lose: compteur <= 0,
    });
  }

  render(): React.ReactNode {
    const { compteur, charList, win, lose } = this.state;
    const jsx = !(win || lose) ? (
      <Board click={this.click} />
    ) : (
      <RestartElement win={win} click={this.restart} />
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
          {jsx}
          <div>
            <p>Essaies restants: {compteur}</p>
            <p>Mot: {charList.join(" ")}</p>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>Created by Aziz</p>
        </footer>
      </div>
    );
  }
}

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
  word = wordList[
    Math.floor((1 + Math.random() * 100) % wordList.length)
  ].toUpperCase();
  charList = [];
  for (let i = 0; i < word.length; i++) {
    charList.push("_");
  }
};

const check = (e: string): boolean => {
  let test = false;
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i).charCodeAt(0) === e.charCodeAt(0)) {
      charList[i] = e;
      test = true;
    }
  return test;
};

const playerWins = (): boolean => {
  let test = true;
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i).charCodeAt(0) !== charList[i].charCodeAt(0))
      test = false;
  return test;
};

const lettres = (): string[] => {
  const ls = [];
  for (let i = 0; i < 26; i++) {
    ls.push(String.fromCharCode("A".charCodeAt(0) + i));
  }
  return ls;
};

const getButtons = (onClick): React.Component[] => {
  const buttons = [];
  for (let i = 0; i < lettres().length; i++) {
    const e = lettres()[i];
    buttons.push(<MyButton text={e} onClick={onClick} />);
  }
  return buttons;
};

export default Game;
