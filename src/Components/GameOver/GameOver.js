function GameOver({ gameScore }) {
  console.log(gameScore);

  return (
    <div>
      {gameScore === 1 ? (
        <div>
          {" "}
          <p>YOU WIN THE GAME</p>
          <a href='/'>PLAY AGAIN</a>
        </div>
      ) : (
        <div>
          <p>YOU LOSE THE GAME</p>
          <a href='/'>PLAY AGAIN</a>
        </div>
      )}
    </div>
  );
}

export default GameOver;
