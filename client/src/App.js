import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details/Details";

import Navbar from "./components/Navbar/Navbar";
import Allcourse from "./pages/Courses/Allcourse";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/courses">
              <Allcourse />
            </Route>
            <Route path="/:name/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
