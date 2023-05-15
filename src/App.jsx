import "./App.css";
import About from "./Components/About.component";
import Footer from "./Components/Footer.component";
import Hero from "./Components/Hero.component";
import Navbar from "./Components/Navbar.component";
import Services from "./Components/Services.component";
import Tours from "./Components/Tours.component";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
