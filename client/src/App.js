import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin.jsx";
import Dashboard from "./pages/Admin/DashBoard/DashBoard";

import Auth from "./pages/Auth/Auth";
import Allcourse from "./pages/Courses/Allcourse";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Route component={Navbar}>
          <Switch>
            <Route exact path="/auth" component={Auth}></Route>
            <Route exact path="/courses" component={Allcourse}></Route>
            <Route exact path="/:name/:id" component={Details}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Route>
      </Router>

      <Router>
        <Route component={Dashboard}>
          <Switch>
            <Route exact path="/admin" component={Admin}></Route>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
