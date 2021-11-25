import { usePcChoice } from "../../Context/PcChoiceContext";
import style from "./style.module.css";

function Header() {
  const { score } = usePcChoice();

  return (
    <div className={style.header}>
      <div className={style.title}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className={style.score}>
        <p>Score</p>
        <div style={{ fontSize: "3.5rem", fontWeight: "bold" }}>{score}</div>
      </div>
    </div>
  );
}

export default Header;
