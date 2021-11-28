import { useState } from "react";
import { usePcChoice } from "../../Context/PcChoiceContext";
import rules from "../../image-rules.svg";
import close from "../../icon-close.svg";
import style from "./style.module.css";
import { Modal, Button } from "react-bootstrap";

function Footer() {
  const { matchResults } = usePcChoice();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      {matchResults.map((result, index) => (
        <p className={style.footerResult} key={index}>
          {index + 1}.Tour - {result}
        </p>
      ))}
      <div>
        <button className={style.footerRules} onClick={handleShow}>
          RULES
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={style.modalTitle}>GAME RULES</Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.modalBody}>
            <img src={rules} alt='rules' />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Footer;
