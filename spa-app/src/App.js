import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import { Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="portfolio">Portfolio</Link>

        <br></br>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='portfolio/*' element={<Portfolio />}></Route>
        </Routes>
    </div>
  );
}

export default App;
