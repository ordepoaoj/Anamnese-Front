import React from "react";
import './HeaderSection.css';
import AnamneseLogin from "../../pages/login/login";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();
    return (
        <header className="App-header">
            <div className="container Container-Title">
                <h1>Consultoria do Sono</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#about">Sobre Nós</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact-us">Contato</a></li>
                </ul>
            </nav>
                <button id="loginButton" onClick={() =>{
                    console.log('loginButton');
                    navigate('/login');
                }
                 }>Login</button>
            </div>
        </header>
    );
}

export default HeaderSection;