import Contacts from './Components/ContactSection/contacts';
import HeaderSection from './Components/Header/HeaderSection';
import Footer from './Components/footer/footer';
import './Home.css';

console.log('Home ');

const Home = () => {
  return (
    <div className="App">
        <HeaderSection />
      <main>
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
