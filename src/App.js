import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Portfolio></Portfolio>
      <Services></Services>
      <Header></Header>
    </div>
  );
}

export default App;
