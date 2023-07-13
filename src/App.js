import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
// Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Book from "./components/Book";
import Foot from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <Foot />
      </div>
    </Router> 
  );
}

export default App;
