import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
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
