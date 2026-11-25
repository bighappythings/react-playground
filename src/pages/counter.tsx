import { useState } from 'react'

import Header from "../components/header";
import Footer from "../components/footer";

import Counter from "../components/counter";

import './css/App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <Header />
      <section id="center" className="main">
        <Counter />
      </section>
      <Footer />

      

    </>
  )
}

export default App
