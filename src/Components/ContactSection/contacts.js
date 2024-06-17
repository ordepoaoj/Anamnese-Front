import React from "react";

const Contacts = () => {
    return (
        <div className="content">
          <section className="about">
            <div className="container">
              <h2>Sobre Nós</h2>
              <p>A Consultoria do Sono é uma equipe dedicada a ajudar indivíduos a melhorar sua qualidade de sono e saúde mental. Nossos especialistas oferecem soluções personalizadas para uma variedade de problemas relacionados ao sono.</p>
            </div>
          </section>
          
          <section className="services">
            <div className="container">
              <h2>Nossos Serviços</h2>
              <ul>
                <li>Consulta Individual</li>
                <li>Programas de Tratamento Personalizados</li>
                <li>Workshops e Palestras</li>
                <li>Avaliação do Ambiente de Sono</li>
              </ul>
            </div>
          </section>

          <section className="contact-us">
            <div className="container">
              <h2>Contate-Nos</h2>
              <ul>
                <li>Whatsapp: +55 (21) 98765-4321</li>
                <li>E-mail: bvinovacoes@gmail.com</li>
                <li>Horário de atendimento:</li>
                <li>Segunda à Sexta de 9:00 às 18:00</li>
              </ul>
            </div>
            </section>
        </div>
    );
}

export default Contacts;