import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Shop from './Shop';
import WhatsNew from './WhatsNew';
import Contact from './Contact';

function App() {
  return (
    <Router basename="/blossom-blocks">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/#" element={<Home />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/whatsnew" element={<WhatsNew />} /> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
