import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import './App.css'
import Login from './Pages/Login/Login';
import AllPotteries from './Pages/AllPotteries/AllPotteries/AllPotteries';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/potteries/:potId'>
            <Purchase></Purchase>
          </Route>
          <Route path='/allpotteries'>
            < AllPotteries></AllPotteries>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
