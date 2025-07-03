import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='home-page'>
      <section className='home-title'>
        <div className='home-text'>
            <h1>Start Building Today</h1>
            <Button as={NavLink} to="/shop" className="button-pink">Shop Now</Button>
        </div>
      </section>
    </div>
  );
}

export default Home;