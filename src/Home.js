import ContactForm from './Components/ContactForm/contactForm';
import Contacts from './Components/ContactSection/contacts';
import HeaderSection from './Components/Header/headerSection';
import Footer from './Components/footer/footer';
import './Home.css';

console.log('Home ');

const Home = () => {
  return (
    <div className="App">
        <HeaderSection />
      <main>
        <Contacts />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
