import React,{useState} from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import LifeCycle from './LifeCycle';
import Counter from './Counter';
import JokeAPI from './JokeAPI';
import FormFocus from "./FormFocus";

function App() {
  const [show, setShow] = useState(true);
  
  return (
    <>
      <header>
        <Header title="THE TITLE"/>
      </header>
      <main>
        <Content/>
      </main>
      <footer>
        <Footer/>
      </footer>
      <button onClick={() => setShow(!show)}>Toggle Component</button>
      {show && <LifeCycle />}
      <div>
        <Counter/>
      </div>
      <div>
        <JokeAPI/>
      </div>
      <div>
        <FormFocus/>
      </div>
    </>
  );
}

export default App;
