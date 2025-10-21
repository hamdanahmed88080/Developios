import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Header></Header>
    </div>
  );
}

export default App;
