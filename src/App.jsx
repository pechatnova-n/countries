import './App.css';
import Header from "./components/Header";
import {Main} from "./components/Main";
import {Routes, Route} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {NotFound} from "./pages/NotFound";
import {Detail} from "./pages/Detail";
import {useState} from "react";
import {Login} from "./components/Login";


//1.41min

function App() {
    const [countries, setCountries] = useState([]);
    console.log(countries)

  return (
      <>
        <Header />
        <Main>
            <Routes>
                <Route index element={<HomePage countries={countries} setCountries={setCountries} />} path='/' />
                <Route element={<Detail />} path='/country/:name' />
                <Route element={<Login />} path='/login' />
                <Route element={<NotFound />} path='*' />
            </Routes>
        </Main>
      </>
  );
}

export default App;
