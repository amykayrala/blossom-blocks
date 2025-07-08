import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import flower from './media/Wildflower.png';
import tropical from './media/tropical.png';
import car from './media/car.png';
import trevi from './media/trevi.png';
import rainbow from './media/rainbow.png';
import CustomCard from './CustomCard';
import SaleCard from './SaleCard';
import Data from "./Data";
import React, { useState } from 'react';

function Home( { cart, setCart }) {
  const [item, setItem] = useState(Data);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
    <div className='home-page'>
      <section className='home-title' style={{position: 'relative'}}>
        <Container fluid style={{margin: 0}}>
        <Row>
          <Col lg="6" style={{paddingLeft: '10%', display: 'flex', alignItems: 'center'}}>
            <div className='home-text'>
              <h1 className='title'>Build. Create. Imagine.</h1>
              <p>Whether you're a kid or an adult, our building blocks are designed to unlock creativity, spark imagination, and bring people together. </p>
              <Button as={NavLink} to="/shop" className="lego-button">Shop Now</Button>
            </div>
          </Col>
          <Col lg="6">
            <img src={flower} style={{ textAlign: 'left', float: 'left'}} className="flowerpic" alt="flower picture" />
          </Col>
        </Row>
          
      </Container>
      <div className ="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,240C640,277,800,299,960,298.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      </section>


      <section id="favourites" className="favourites">
        <h2 className='favourite-title'><strong>Discover your new favourite set</strong></h2>
          <Container style={{margin: 'auto'}}  >
          <Row>
            <Col style= {{padding : '0'}}>
              <CustomCard
                  image= {tropical}
                  title= "Tropical Bouquet"
                  text="Bring paradise home with this vibrant tropical bouquet — a colorful arrangement of exotic blooms that never wilt."
                  price="17.99$"
                  item={Data.find(item => item.id === 2)}
                  addToCart={addToCart}
              />
            </Col>
            <Col style= {{padding : '0'}}>
              <CustomCard
                  image= {car}
                  title= "Fast Car"
                  text="Speed meets style in this sleek black and yellow Fast Car — built for thrill-seekers and display lovers alike."
                  price="14.99$"
                  item={Data.find(item => item.id === 3)}
                  addToCart={addToCart}
              />
            </Col>
            <Col style= {{padding : '0'}}>
              <SaleCard
                  image= {trevi}
                  title= "Trevi Fountain"
                  text="Enjoy the beauty of Rome with this stunning Trevi Fountain set: a piece of history you can build and cherish."
                  price="68.99$"
                  salePrice="55.99$"
                  item={Data.find(item => item.id === 4)}
                  addToCart={addToCart}

              />
            </Col>
            <Col style= {{padding : '0'}}>
              <CustomCard
                  image= {rainbow}
                  title= "Rainbow Population"
                  text= "Add a splash of color to your collection with this set: a joyful celebration of diversity and creativity."
                  price="12.99$"
                  item={Data.find(item => item.id === 5)}
                  addToCart={addToCart}
              />
            </Col>
          </Row>
          </Container>
      </section>
      <section className="offers">
        <Row style={{width: "90%"}}>
          <Col className='offre-kid'>
            <p style={{ marginBottom: '0rem' }}><strong>Kids</strong></p>
            <h3 className="txt-blue"><strong>Big Smiles, Little Prices!</strong></h3>
            <p style={{width: '50%'}}>Colorful, creative, and parent-approved, these sets are ready for playtime adventures at playful prices.</p>
            <Button as={NavLink} to="/shop?sale=true" className="lego-button">Shop Sale Now</Button>

          </Col>
          <Col className='offre-adult'>

            <p style={{ marginBottom: '0rem' }}><strong>Adults</strong></p>
            <h3 className="txt-blue" style={{outline: "3px white"}}><strong>Build More, Spend Less!</strong></h3>
            <p style={{width: '50%'}}>Whether you're an architect-at-heart or just love a good hands-on project, now's the perfect time to treat yourself.</p>
            <Button as={NavLink} to="/shop?sale=true" className="lego-button">Shop Sale Now</Button>


          </Col>
        </Row>

      </section>
    </div>
  );
}

export default Home;