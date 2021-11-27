import { createContext, useContext, useState, useEffect } from "react";

const PcChoiceContext = createContext();

export const PcChoiceProvider = ({ children }) => {
  const [choice, setChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [matchResults, setMatchResults] = useState([]);
  const [counter, setCounter] = useState(3);

  const randomNumber = () => {
    //pc seçimi için random rakam üretip değer atadık
    const number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
      setPcChoice("rock");
    } else if (number === 2) {
      setPcChoice("paper");
    } else if (number === 3) {
      setPcChoice("scissors");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      //sayaç tamamlandıktan sonra sonuç ekrana gelsin diye timeout kullandık
      if (choice === "rock") {
        if (pcChoice === "rock") {
          setScore(score + 0);
          setResult("DRAW");
        } else if (pcChoice === "paper") {
          setScore(score - 1);
          setResult("YOU LOST");
        } else if (pcChoice === "scissors") {
          setScore(score + 1);
          setResult("YOU WON");
        }
      } else if (choice === "paper") {
        if (pcChoice === "paper") {
          setScore(score + 0);
          setResult("DRAW");
        } else if (pcChoice === "scissors") {
          setScore(score - 1);
          setResult("YOU LOST");
        } else if (pcChoice === "rock") {
          setScore(score + 1);
          setResult("YOU WON");
        }
      } else if (choice === "scissors") {
        if (pcChoice === "scissors") {
          setScore(score + 0);
          setResult("DRAW");
        } else if (pcChoice === "rock") {
          setScore(score - 1);
          setResult("YOU LOST");
        } else if (pcChoice === "paper") {
          setScore(score + 1);
          setResult("YOU WON");
        }
      }
    }, 3000);
  }, [choice]);

  const addMatchResults = () => {
    setMatchResults([...matchResults, result]);
  };

  const values = {
    choice,
    setChoice,
    pcChoice,
    setPcChoice,
    score,
    result,
    matchResults,
    randomNumber,
    addMatchResults,
    counter,
    setCounter,
  };

  return (
    <PcChoiceContext.Provider value={values}>
      {children}
    </PcChoiceContext.Provider>
  );
};

export const usePcChoice = () => useContext(PcChoiceContext);
