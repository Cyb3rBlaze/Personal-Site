import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './nav';
import Home from './Home';
import Annotations from './annotations/index';
import FoundationalStuff from './foundational_stuff';
import Recordings from './recordings';
import CourseNotes from './course_notes';
import Rabbitholes from './rabbitholes';
import RandomThoughts from './random_thoughts';
import Ideas from './ideas';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Home/>} />
          <Route path="annotations" element={<Annotations/>} />
          <Route path="foundational-stuff" element={<FoundationalStuff/>} />
          <Route path="recordings" element={<Recordings/>} />
          <Route path="course-notes" element={<CourseNotes/>} />
          <Route path="rabbitholes" element={<Rabbitholes/>} />
          <Route path="random-thoughts" element={<RandomThoughts/>} />
          <Route path="ideas" element={<Ideas/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
