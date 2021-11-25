import { usePcChoice } from "../../Context/PcChoiceContext";
import Header from "../../Components/Header/Header";
import ResultScore from "../../Components/ResultScore/ResultScore";
import GameOver from "../../Components/GameOver/GameOver";
import Footer from "../../Components/Footer/Footer";
import style from "./style.module.css";

function Game() {
  const { choice, result, counter, score } = usePcChoice();

  return (
    <div>
      <Header />
      {/* <div className={style.game}>
        <div className={style.user}>
          <p className={style.youPicked}>YOU PICKED</p>
          {counter === 0 && result === "YOU WIN" ? (
            <button
              className={`${style.btn} ${style[choice]} ${style.winner}`}></button>
          ) : (
            <button className={`${style.btn} ${style[choice]}`}></button>
          )}
        </div>
        <ResultScore />
      </div> */}

      {/* {score === 1 || score === -1 ? (
        <GameOver gameScore={score} />
      ) : (
        <ResultScore />
      )} */}

      <ResultScore />

      <Footer />
    </div>
  );
}

export default Game;
