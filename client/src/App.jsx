import Home from "./pages/home/Home";
import "./app.scss";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {BrowserRouter as Router , Switch ,Route , Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './authContext/AuthContext';
const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {user?<Home/>:<Redirect to="/register"/> }
        </Route>
        <Route path="/register" exact>
          {!user?<Register/>:<Redirect to="/"/> }
        </Route>
        <Route path="/login" exact>
          {!user?<Login/>:<Redirect to="/"/> }
        </Route>
        {user?
        <>
        <Route path="/movies" exact>
          <Home type="movie"/>
        </Route>
        <Route path="/series" exact>
          <Home type="series"/>
        </Route>
        <Route path="/watch" exact>
          <Watch/>
        </Route>
        </>
        :<Redirect to="/register"/>
        }
      </Switch>
    </Router>
  );
}; 

export default App;