import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
