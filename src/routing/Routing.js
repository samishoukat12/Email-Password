import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
function Routing() {
 return( <Router>
  <Switch>
<Route  exact path="/">
  <SignUp />
</Route>
<Route path="/login">
  <Login />
</Route>

</Switch>
</Router>)
}
export default Routing;

