import './App.css';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import LineAnim from './components/lineAnim/lineAnim';


function App() {

  return (
     <div className="App">
       <LineAnim />
     </div>
  );
}

export default App;
