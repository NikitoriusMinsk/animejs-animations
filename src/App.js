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
import LogoAnimationPage from "./components/logoAnim/logoAnim";


function App() {
  return (
    <div className="App">
      <Router>
          <div className="links">
            <Link to="/line">Line animation</Link>
            <Link to="/scroll">Scroll animation</Link>
            <Link to="/transition">Page transition animation</Link>
            <Link to="/logo">Logo animation page</Link>
          </div>
          <Switch>
            <Route path="/line" component={LineAnimation} />
            <Route path="/scroll" component={ScrollAnimation} />
            <Route path="/transition" component={TransitionAnimation} />
            <Route path="/page" component={TransitionPage} />
            <Route path="/logo" component={LogoAnimationPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
