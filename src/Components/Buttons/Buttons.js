import { Link } from "react-router-dom";
import style from "./style.module.css";
import back from "../../home-background.svg";
import { usePcChoice } from "../../Context/PcChoiceContext";

function Buttons() {
  const { setChoice, randomNumber } = usePcChoice();

  return (
    <div className={style.main}>
      <img src={back} className={style.back} alt='background' />
      <div className={style.buttons}>
        <Link to='/game'>
          <button
            className={`${style.rock} ${style.btns}`}
            value='rock'
            onClick={(e) => {
              setChoice(e.target.value);
              randomNumber();
            }}></button>
        </Link>
        <Link to='/game'>
          <button
            className={`${style.paper} ${style.btns}`}
            value='paper'
            onClick={(e) => {
              setChoice(e.target.value);
              randomNumber();
            }}></button>
        </Link>
        <Link to='/game'>
          <button
            className={`${style.scissors} ${style.btns}`}
            value='scissors'
            onClick={(e) => {
              setChoice(e.target.value);
              randomNumber();
            }}></button>
        </Link>
      </div>
    </div>
  );
}

export default Buttons;
