import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
