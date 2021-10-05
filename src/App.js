import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LineAnimation from './components/lineAnim/lineAnim';
import ScrollAnimation from './components/scrollAnim/scrollAnim';
import TransitionAnimation from "./components/transitionAnim/transitionAnim";
import TransitionPage from "./components/transitionAnim/transitionPage";


function App() {
  return (
    <div className="App">
      <Router>
          <div className="links">
            <Link to="/line">Line animation</Link>
            <Link to="/scroll">Scroll animation</Link>
            <Link to="/transition">Page transition animation</Link>
          </div>
          <Switch>
            <Route path="/line" component={LineAnimation} />
            <Route path="/scroll" component={ScrollAnimation} />
            <Route path="/transition" component={TransitionAnimation} />
            <Route path="/page" component={TransitionPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
