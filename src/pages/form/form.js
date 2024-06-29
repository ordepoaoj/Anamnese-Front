import React from "react";
import "./form.css";
import AnamneseLogin from "../login/login";

const Formulario = () => {
  const perguntas =
    "Cupidatat anim pariatur ex sit aliquip. Ex Lorem magna voluptate aute exercitation est veniam quis pariatur cupidatat sunt ut fugiat. Do aute duis consequat id incididunt elit nisi ut magna et in veniam culpa. Labore occaecat irure mollit adipisicing ex. Do ad labore excepteur nisi.Id nostrud veniam do nostrud ad laborum minim laboris non fugiat veniam.";
  const opcao1 = "Minim cillum non consequat consequat excepteur.";
  const opcao2 = "Magna nostrud ea ex ut.";
  const opcao3 = "Elit fugiat qui consectetur laborum anim.";
  const opcao4 = "Fugiat voluptate qui minim ullamco irure cupidatat.";

  return (
    <div className="form-container">
      <h1 className="form-title">Pesquisa de Preferências</h1>
      <form>
        <div className="form-group">
          <label>{perguntas}</label>
          <div className="option">
            <input type="radio" id="option1" name="color" value="azul" />
            <label htmlFor="option1">{opcao1}</label>
          </div>
          <div className="option">
            <input type="radio" id="option2" name="color" value="vermelho" />
            <label htmlFor="option2">{opcao2}</label>
          </div>
          <div className="option">
            <input type="radio" id="option3" name="color" value="verde" />
            <label htmlFor="option3">{opcao3}</label>
          </div>
          <div className="option">
            <input type="radio" id="option4" name="color" value="amarelo" />
            <label htmlFor="option4">{opcao4}</label>
          </div>
        </div>

        <div className="form-group">
          <label>{perguntas}</label>
          <div className="option">
            <input type="checkbox" id="option1" name="color" value="azul" />
            <label htmlFor="option1">{opcao1}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option2" name="color" value="vermelho" />
            <label htmlFor="option2">{opcao2}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option3" name="color" value="verde" />
            <label htmlFor="option3">{opcao3}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="option4" name="color" value="amarelo" />
            <label htmlFor="option4">{opcao4}</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;