import tools from "../tools";
import styles from "../styles/Home.module.css";

const { getButtons } = tools;

interface IBoardProps {
  click: (e: string) => void;
}

const Board: React.FC<IBoardProps> = (props) => {
  const btn = getButtons(props.click);
  return (
    <div className={styles.card}>
      <div>
        {/* //ça ne marche pas avec la boucle for !        
          {lettres().forEach((e) => {
            <MyButton text={e} onClick={props.click} />;
          })}  */}
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

export default Board;
