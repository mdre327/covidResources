
import { Route, Switch } from 'react-router';
import './App.css';
import  BedPage from "./components/pages/bed"
import Home from "./components/pages/home"
import OxygenPage from "./components/pages/oxygen"
import PlasmaPage from "./components/pages/plasma";
import MedicinePage from "./components/pages/medicine";
import Navbar from './components/layout/navbar';
function App() {
  return (
    <div className="App">
  <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route  path="/oxygen-detail" component={OxygenPage}/>
    <Route path="/bed-detail" component={BedPage}/>
    <Route path="/plasma-detail" component={PlasmaPage}/>
    <Route path="/medicine-detail" component={MedicinePage}/>
    </Switch>

    </div>
  );
}

export default App;
