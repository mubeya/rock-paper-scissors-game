import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Game from "./Pages/Game";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
