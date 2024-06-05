import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Consultoria do Sono</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact-us">Contato</a></li>
            </ul>
          </nav>
          <button id="loginButton">Login</button>
        </div>
      </header>
      
      <main>
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
      </main>
      
      <footer>
        <div className="container">
          <p>&copy; 2024 Consultoria do Sono. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
