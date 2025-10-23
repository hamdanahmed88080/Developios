import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Process from "./Components/Process/Process";
import Packages from "./Components/Packages/Packages";
import Faq from "./Components/Faq/Faq";
import EarnAndRefer from "./Components/EarnAndRefer/EarnAndRefer";
import Footer from "./Components/Footer/Footer";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div
      className="App"
      onScroll={() => {
        console.log("I am scrolled");
      }}
    >
      <Navbar></Navbar>
      <Hero></Hero>
      <Portfolio></Portfolio>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Process></Process>
      <Packages></Packages>
      <Reviews></Reviews>
      <Faq></Faq>
      <EarnAndRefer></EarnAndRefer>
      <Footer></Footer>
      <Header></Header>
    </div>
  );
}

export default App;
