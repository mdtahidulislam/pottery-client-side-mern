import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import './App.css'
import AllPotteries from './Pages/AllPotteries/AllPotteries/AllPotteries';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';

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
          <Route path='/register'>
            <Register></Register>
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
