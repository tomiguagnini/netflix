import Home from './Pages/Home/Home';
import Movie from './Pages/Movie/Movie';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/movie/:id" element={<Movie/>} /> 

        </Routes>
      </Router>
    </>
  );
}

export default App;
