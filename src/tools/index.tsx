import MyButton from "../components/mybutton";

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

const getRandomWord = (): { word: string; charList: string[] } => {
  const word = wordList[
    Math.floor((1 + Math.random() * 100) % wordList.length)
  ].toUpperCase();
  const charList = [];
  for (let i = 0; i < word.length; i++) {
    charList.push("_");
  }
  return {
    word,
    charList,
  };
};

const check = (word: string, charList: string[], e: string): boolean => {
  let test = false;
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i).charCodeAt(0) === e.charCodeAt(0)) {
      charList[i] = e;
      test = true;
    }
  return test;
};

const playerWins = (word: string, charList: string[]): boolean => {
  let test = true;
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i).charCodeAt(0) !== charList[i].charCodeAt(0))
      return false;
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

export default {
  getRandomWord,
  playerWins,
  getButtons,
  check,
};
