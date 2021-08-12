import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin.jsx";

import Auth from "./pages/Auth/Auth";
import Allcourse from "./pages/Courses/Allcourse";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Route path={["/courses", "/auth", "/cart", "/:name/:id", "/"]}>
          <Navbar />
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/courses">
              <Allcourse />
            </Route>
            <Route path="/:name/:id">
              <Details />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Route>
      </Router>

      <Router>
        <Route path={["/admin"]}>
          <Switch>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
