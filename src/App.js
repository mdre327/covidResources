
import { Route, Switch } from 'react-router';
import './App.css';
import Home from "./components/pages/home"
import Oxygen from "./components/pages/oxygen"
function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route  path="/oxygen-detail" component={Oxygen}/>
    </Switch>

    </div>
  );
}

export default App;
