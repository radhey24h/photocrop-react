import './App.css';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
