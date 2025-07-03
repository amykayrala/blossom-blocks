import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Shop from './Shop';
import WhatsNew from './WhatsNew';
import OurTeam from './OurTeam';
import Reviews from './Reviews';

function App() {
  return (
    <Router basename="/blossom-blocks">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/#" element={<Home />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/ourteam" element={<OurTeam />} /> 
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/whatsnew" element={<WhatsNew />} /> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
