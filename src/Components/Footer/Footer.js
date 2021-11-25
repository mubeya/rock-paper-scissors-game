import { usePcChoice } from "../../Context/PcChoiceContext";
import style from "./style.module.css";

function Footer() {
  const { matchResults } = usePcChoice();
  return (
    <div style={{ marginTop: "1rem" }}>
      {matchResults.map((result, index) => (
        <p className={style.footerResult} key={index}>
          {index + 1}.Tour - {result}
        </p>
      ))}
    </div>
  );
}

export default Footer;
