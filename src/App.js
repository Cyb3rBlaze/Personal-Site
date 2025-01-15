import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './nav';
import Home from './Home';
import Annotations from './annotations/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Home/>} />
          <Route path="" element={<Annotations/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
