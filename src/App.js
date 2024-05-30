import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Info/Aboutpage';
import Projectpage from './pages/Projectpage/Projectpage';

function App() {
  return (
    <Router>
      <div>
        
            <Routes>

              <Route path="/" element={<Homepage/>} />
              <Route path='/about' element={<Aboutpage/>}/>
              <Route path='/projects' element={<Projectpage/>}/>
            </Routes>
          
      </div>
    </Router>
  );
}

export default App;
