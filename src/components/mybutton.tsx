import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface IProps {
  text: string;
  onClick: (e: string) => void;
}

const MyButton: React.FC<IProps> = ({ text, onClick }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      variant="light"
      onClick={() => {
        setDisabled(true);
        onClick(text);
      }}
      style={{
        margin: 2,
        minWidth: 40,
        height: 40,
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MyButton;
