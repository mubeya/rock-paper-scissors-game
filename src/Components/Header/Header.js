import { usePcChoice } from "../../Context/PcChoiceContext";
import style from "./style.module.css";

function Header() {
  const { score } = usePcChoice();

  return (
    <div className={style.header}>
      <a href='/' className={style.logo}>
        <div className={style.title}>
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
      </a>
      <div className={style.score}>
        <p>Score</p>
        <p style={{ fontSize: "3.5rem", fontWeight: "bold" }}>{score}</p>
      </div>
    </div>
  );
}

export default Header;
