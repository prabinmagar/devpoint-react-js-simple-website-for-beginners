import './App.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';
import Skills from "./components/Skills/Skills";
import Stats from "./components/Stats/Stats";
import Work from "./components/Work/Work";
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from "./components/Services/Services";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="holder">
      <Header />
      <AboutUs />
      <Skills />
      <Stats />
      <Work />
      <WorkProcess />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
