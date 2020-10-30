import React, { useState } from "react";

interface IProps {
  text: string;
  onClick: (e: string) => void;
}

const MyButton: React.FC<IProps> = ({ text, onClick }) => {
  const [state, setState] = useState({ disabled: false });

  const { disabled } = state;
  const jsx = disabled ? (
    <button disabled>
      <p>{text}</p>
    </button>
  ) : (
    <button
      onClick={() => {
        setState({ disabled: true });
        onClick(text);
      }}
    >
      <p>{text}</p>
    </button>
  );
  return jsx;
};

export default MyButton;
