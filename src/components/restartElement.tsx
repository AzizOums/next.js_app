import MyButton from "./mybutton";

interface IRestartButtonProps {
  win: boolean;
  click: () => void;
}

const RestartElement: React.FC<IRestartButtonProps> = ({
  win,
  click,
}: IRestartButtonProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p style={{ textAlign: "center" }}>
        {win ? "Bravo vous avez gagné !" : "Vous avez perdu !"}
      </p>
      <MyButton text="recommencer" onClick={click} />
    </div>
  );
};

export default RestartElement;
