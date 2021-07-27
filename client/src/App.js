import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/:name/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
