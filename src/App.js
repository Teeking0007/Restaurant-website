import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 
import Homepage from './pages/Homepage';

import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
        
        
        
    </div>
  );
}

export default App;
