import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form-container">
        <h1 className="register-title">Registre-se</h1>
        <p className="register-description">Preencha o formulário abaixo para criar sua conta.</p>
        <form>
          <div className="register-input">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="register-input">
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input type="date" id="birthdate" name="birthdate" placeholder="dd/mm/aaaa" required />
          </div>
          <div className="register-input">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required />
          </div>
          <div className="register-input">
            <label htmlFor="gender">Sexo</label>
            <select id="gender" name="gender" required>
              <option value="">Selecione...</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Prefiro não dizer</option>
            </select>
          </div>
          <div className="register-input">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="register-input">
            <label htmlFor="confirmEmail">Confirmar E-mail</label>
            <input type="email" id="confirmEmail" name="confirmEmail" required />
          </div>
          <div className="register-input">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="register-button">Registrar</button>
        </form>
        <div className="register-social">
          <p>ou registre-se com:</p>
          <div className="register-social-buttons">
            <button className="register-social-button google">
              <span className="register-social-icon">G</span> Google
            </button>
            <button className="register-social-button facebook">
              <span className="register-social-icon">F</span> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
