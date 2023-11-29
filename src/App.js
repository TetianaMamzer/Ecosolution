import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Values from "./components/values/Values";
import Electro from "./components/elektri/Electro";
import Cases from "./components/cases/Cases";
import css from './app.module.scss';

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <Values />
      <Electro />
      <Cases />
    </div>
  );
}

export default App;
