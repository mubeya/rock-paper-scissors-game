import style from "./style.module.css";

function GameOver({ gameScore }) {
  return (
    <div style={{ textAlign: "center" }}>
      {gameScore === 3 ? (
        <p className={style.gameResult}>YOU WON THE GAME</p>
      ) : (
        <p className={style.gameResult}>YOU LOST THE GAME</p>
      )}
      <a className={style.playGame} href='/'>
        PLAY AGAIN
      </a>
    </div>
  );
}

export default GameOver;
