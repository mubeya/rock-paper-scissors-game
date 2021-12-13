import { useEffect } from "react";
import { usePcChoice } from "../../Context/PcChoiceContext";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import GameOver from "../GameOver/GameOver";

function ResultScore() {
  const {
    pcChoice,
    result,
    addMatchResults,
    counter,
    setCounter,
    choice,
    setChoice,
    setPcChoice,
    score,
  } = usePcChoice();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  });

  return (
    <div className={style.game}>
      {score === 3 || score === -3 ? (
        <GameOver gameScore={score} />
      ) : (
        <>
          <div className={style.user}>
            <p className={style.youPicked}>YOU PICKED</p>
            {counter === 0 && result === "YOU WON" ? (
              <button
                className={`${style.btn} ${style[choice]} ${style.winner}`}></button>
            ) : (
              <button className={`${style.btn} ${style[choice]}`}></button>
            )}
          </div>
          <div style={{ textAlign: "center", display: "flex" }}>
            {counter !== 0 ? (
              <div className={style.resultText}>
                <p className={style.housePicked}>THE HOUSE PICKED</p>
                <button className={style.btn}>{counter}</button>
              </div>
            ) : (
              <>
                <div className={style.resultText}>
                  <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                    {result}
                  </p>
                  <Link
                    to='/home'
                    className={style.playAgain}
                    onClick={() => {
                      addMatchResults();
                      setCounter(3);
                      setPcChoice("");
                      setChoice("");
                    }}>
                    PLAY AGAIN
                  </Link>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p className={style.housePicked}>THE HOUSE PICKED</p>
                  {result === "YOU LOST" ? (
                    <button
                      className={`${style.btn} ${style[pcChoice]} ${style.winner}`}></button>
                  ) : (
                    <button
                      className={`${style.btn} ${style[pcChoice]}`}></button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ResultScore;
