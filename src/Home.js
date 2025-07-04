import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import flower from './media/Wildflower.png';
import tropical from './media/tropical.png'
import car from './media/car.png'
import trevi from './media/trevi.png'
import rainbow from './media/rainbow.png'
import CustomCard from './CustomCard';
import SaleCard from './SaleCard'

function Home() {
  return (
    <div className='home-page'>
      <section className='home-title' style={{position: 'relative'}}>
        <Container fluid style={{margin: 0}}>
        <Row>
          <Col lg="6" style={{paddingLeft: '10%', display: 'flex', alignItems: 'center'}}>
            <div className='home-text'>
              <h1 className='title'>Build. Create. Imagine.</h1>
              <p>Whether you're a kid or an adult, our building blocks are designed to unlock creativity, spark imagination, and bring people together. </p>
              <Button as={NavLink} to="/shop" className="button-pink">Shop Now</Button>
            </div>
          </Col>
          <Col lg="6">
            <img src={flower} style={{ textAlign: 'left', float: 'left'}} className="flowerpic" alt="flower picture" />
          </Col>
        </Row>
          
      </Container>
      <div class ="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path fill="#FFFFFF" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,240C640,277,800,299,960,298.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      </section>

      <section className="favourites">
        <h3 className='favourite-title'>Discover your new favourite set</h3>
          <Container>
          <Row>
            <Col>
              <CustomCard
                  image= {tropical}
                  title= "Tropical Bouquet"
                  text="Enjoy this bla bla bla bla"
                  price="17.99$"
              />
            </Col>
            <Col>
              <CustomCard
                  image= {car}
                  title= "Fast Car"
                  text="Enjoy this bla bla bla bla"
                  price="14.99$"
              />
            </Col>
            <Col>
              <SaleCard
                  image= {trevi}
                  title= "Trevi Fountain"
                  text="Enjoy this bla bla bla bla"
                  price="74.99$"
                  sale="65.99$"
              />
            </Col>
            <Col>
              <CustomCard
                  image= {rainbow}
                  title= "Rainbow Population"
                  text="Enjoy this bla bla bla bla"
                  price="12.99$"
              />
            </Col>
          </Row>
          </Container>
      </section>
      <section className="offers">
        <Row>
          <Col className='offre-kid'>
          </Col>
          <Col className='offre-adult'>
          </Col>
        </Row>

      </section>
    </div>
  );
}

export default Home;