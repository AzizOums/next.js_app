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

const getLetters = (): string[] => {
  const list = [];
  for (let i = 0; i < 26; i++) {
    list.push(String.fromCharCode("A".charCodeAt(0) + i));
  }
  return list;
};

export { playerWins, getLetters, check };

export default { playerWins, getLetters, check };
