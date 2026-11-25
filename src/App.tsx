import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import ComponentList from './components/componentList';

import Counter from "./components/counter";
import Calculator from "./components/calculator";
import Quiz from "./components/quiz";

import './css/App.css';
import './css/componentList.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        {/*routes*/}
      
        <Routes>
          <Route path="/" element={<ComponentList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      
        <Footer />
      </BrowserRouter>

      

    </>
  )
}

export default App
