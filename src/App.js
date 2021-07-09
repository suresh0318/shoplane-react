import "./App.css";
import Navbar from "./components/navbar"
import Home from "./components/home/Home";
import Card from "./components/card"
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       <Route exact path="/" component={Home}/>
        <Route exact path="/card/:id" component={Card}/>
      </div>
    </Router>
  );
}

export default App;
