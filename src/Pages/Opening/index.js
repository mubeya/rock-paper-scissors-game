import { Link } from "react-router-dom";
import style from "./style.module.css";
import rules from "../../image-rules.svg";

function Opening() {
  return (
    <div className={style.openingPage}>
      <h1>ROCK - PAPER - SCISSORS GAME</h1>
      <Link to='/home'>
        <button className={style.startBtn}>START GAME</button>
      </Link>
      <div className={style.rulesDiv}>
        <h3>Rules</h3>
        <p>
          The game starts with the user's choice, then the computer makes its
          choice.
        </p>
        <p>The winning side gets 1 point.</p>
        <p>The game ends when either side scores 3 points.</p>
        <img src={rules} alt='rules' className={style.rulesImg} />
      </div>
    </div>
  );
}

export default Opening;
