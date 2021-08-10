import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LineAnimation from './components/lineAnim/lineAnim';
import ScrollAnimation from './components/scrollAnim/scrollAnim';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/line" component={LineAnimation} />
          <Route path="/scroll" component={ScrollAnimation} />
        </Switch>
          <div className="links">
            <Link to="/line">Line animation</Link>
            <Link to="/scroll">Scroll animation</Link>
          </div>
        </Router>
    </div>
  );
}

export default App;
