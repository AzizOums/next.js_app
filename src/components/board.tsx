import React from "react";

import { Row } from "react-bootstrap";

import styles from "../styles/Home.module.css";

import MyButton from "./mybutton";

import { getLetters } from "../utils.ts";

interface IBoardProps {
  click: (e: string) => void;
}

const Board: React.FC<IBoardProps> = ({ click }: IBoardProps) => {
  return (
    <div className={styles.card}>
      <Row style={{ justifyContent: "center" }}>
        {getLetters().map((e) => (
          <MyButton onClick={click} text={e} />
        ))}
      </Row>
    </div>
  );
};
export default Board;
