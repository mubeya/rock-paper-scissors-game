import { useEffect } from "react";
import { usePcChoice } from "../../Context/PcChoiceContext";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function ResultScore() {
  const { pcChoice, result, addMatchResults, counter, setCounter, choice } =
    usePcChoice();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className={style.game}>
      <div className={style.user}>
        <p className={style.youPicked}>YOU PICKED</p>
        {counter === 0 && result === "YOU WIN" ? (
          <button
            className={`${style.btn} ${style[choice]} ${style.winner}`}></button>
        ) : (
          <button className={`${style.btn} ${style[choice]}`}></button>
        )}
      </div>
      <div className={style.resultBtn}>
        {counter !== 0 ? (
          <>
            <div>
              <p className={style.housePicked}>THE HOUSE PICKED</p>
              <button className={style.btn}>{counter}</button>
            </div>
          </>
        ) : (
          <>
            <div className={style.resultText}>
              <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{result}</p>
              <Link
                to='/'
                className={style.playAgain}
                onClick={() => {
                  addMatchResults();
                  setCounter(3);
                }}>
                PLAY AGAIN
              </Link>
            </div>
            <div>
              <p className={style.housePicked}>THE HOUSE PICKED</p>
              {result === "YOU LOSE" ? (
                <button
                  className={`${style.btn} ${style[pcChoice]} ${style.winner}`}></button>
              ) : (
                <button className={`${style.btn} ${style[pcChoice]}`}></button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ResultScore;