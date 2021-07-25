import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch></Switch>
          <Footer />
        </Router>

        <h1>Hello</h1>
      </div>
    </>
  );
};

export default App;