import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import Search from "./pages/Search";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={Landing} />
        <Route exact path="/employeeDirectory" component={Landing} />
        <Route exact path="/search" component={Search} />
      </Wrapper>
    </Router>
  );
}

export default App;
