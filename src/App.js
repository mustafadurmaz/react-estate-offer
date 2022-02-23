import "./App.css";
import EstateList from "./components/EstateList";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EstateDetail from "./components/EstateDetail";
import data from "./estateList.json";
import {useState} from "react";

function App() {
  const [isActive,setIsActive]=useState(true);
  return (
    <div className="App">
      <Router>
        <Header />
        {isActive && 
        <EstateList data={data} />
        }
        
        <Switch>
          <Route path="/estates/:id">
            <EstateDetail data={data} setIsActive={setIsActive} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
