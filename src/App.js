// import About from './Components/About';
import Attribute from './Components/Attribute';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/about" element={<Attribute/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
