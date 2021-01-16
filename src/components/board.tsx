import React from "react";

import { Row } from "react-bootstrap";

import styles from "../styles/Home.module.css";

import MyButton from "./mybutton";

import { getLetters } from "../utils.ts";

interface IBoardProps {
  click: (e: string) => void;
}

const { first, second } = {
  first: getLetters().filter((e, i) => i < 13),
  second: getLetters().filter((e, i) => i >= 13),
};

const Board: React.FC<IBoardProps> = ({ click }: IBoardProps) => {
  return (
    <div className={styles.card}>
      <Row style={{ justifyContent: "center" }}>
        {first.map((e) => (
          <MyButton onClick={click} text={e} />
        ))}
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {second.map((e) => (
          <MyButton onClick={click} text={e} />
        ))}
      </Row>
    </div>
  );
};
export default Board;
