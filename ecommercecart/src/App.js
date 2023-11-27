import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Total } from './components/total';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Welcome } from './components/welcomeTitle';
import { Proizvod } from './components/proizvod';

function App() {
  const [total, setTotal] = useState(0);
  const [cart, dodajCart] = useState([])



  // DODAJ U TOTAL
  function dodaj(cijena) {
    setTotal(total + cijena);

  }
  // CLEAR CART
  function clear() {


    setTotal(0)
    dodajCart([])

  }

  return (
    <Router>

      <NavBar />
      <Welcome />
      <Routes>
        <Route path='/total.jsx' element={<Total dodaj={dodaj} clear={clear} total={total} cart={cart} dodajCart={dodajCart} proizvod={Proizvod} />}></Route>
        <Route path='/home.jsx' element={<Home dodaj={dodaj} clear={clear} total={total} cart={cart} dodajCart={dodajCart} proizvod={Proizvod} />}></Route>
      </Routes>


    </Router>
  )

}

export default App;
