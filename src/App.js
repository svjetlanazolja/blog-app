import "./App.css";
import ButtonCom from "./components/Button/ButtonCom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Main from "./components/Main/main";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <ButtonCom />
      <Hero />
      <Main />
      <Card />
      <Footer />
    </>
  );
}

export default App;
