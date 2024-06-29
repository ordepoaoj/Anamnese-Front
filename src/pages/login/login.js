import React from 'react';
import './login.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function AnamneseLogin() {
  return (
    <MDBContainer fluid className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
        <MDBInput wrapperClass='mb-4' label='Senha' id='formControlLg' type='password' size="lg" />
        <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Lembrar-me' />
          <a href="!#" className="forgot-password">Esqueceu a senha?</a>
        </div>
        <MDBBtn className="mb-4 w-100" size="lg">Entrar</MDBBtn>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">OU</p>
        </div>
      </div>
    </MDBContainer>
  );
}

export default AnamneseLogin;
