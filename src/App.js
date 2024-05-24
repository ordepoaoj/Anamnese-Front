import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Consultoria do Sono</h1>
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
