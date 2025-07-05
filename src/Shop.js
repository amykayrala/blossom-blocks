import './App.css';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Data from "./Data";
import CustomCard from './CustomCard';
import SaleCard from './SaleCard';

function Shop() {
  const [item, setItem] = useState(Data);
  const [filters, setFilters] = useState({
    age: [],
    theme: [],
    price:[],
    onSale: false,
  });  

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      if (category === 'onSale') {
        return { ...prev, onSale: !prev.onSale };
      }
  
      const alreadySelected = prev[category].includes(value);
      const updatedCategory = alreadySelected
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
  
      return { ...prev, [category]: updatedCategory };
    });
  };

  const filteredItems = item.filter((product) => {
    const { age, theme, price, onSale } = filters;
  
    const ageMatch = age.length ? age.includes(product.age.toString()) : true;
    const themeMatch = theme.length ? theme.includes(product.theme.toLowerCase()) : true;
  
    const priceMatch = (() => {
        if (!price.length) return true;
        const actualPrice = product.sale ? product.salePrice : product.price;
    
        return price.some((range) => {
          if (range === "0") return actualPrice <= 19.99;
          if (range === "20") return actualPrice >= 20 && actualPrice <= 49.99;
          if (range === "50") return actualPrice >= 50 && actualPrice <= 69.99;
          if (range === "70") return actualPrice >= 70;
          return false;
        });
      })();
    
      const saleMatch = onSale ? product.sale === true : true;
    
      return ageMatch && themeMatch && priceMatch && saleMatch;
    });

  return (

    <div className='shop-page'>
      <section className="banner-section">
        <div className="banner">
          <h1 style={{margin: 'auto', fontSize:'4rem'}}>Shop our sets!</h1>
        </div>
      </section>
      <Row style={{padding : '2rem 4rem'}}>
        <Col lg='3'>
          <h3 className='txt-blue'>Filter By</h3>
          <h5>Age</h5>
          <Form className="checkbox">
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`Age-5`}
                  label={`0 - 6`}
                  onChange={() => handleCheckboxChange("age", "6")}
                />
                <Form.Check
                  type={type}
                  id={`Age-12`}
                  label={`6 - 12`}
                  onChange={() => handleCheckboxChange("age", "12")}
                />
                <Form.Check
                  type={type}
                  id={`Age-13`}
                  label={`13 +`}
                  onChange={() => handleCheckboxChange("age", "13")}
                />
                <Form.Check
                  type={type}
                  id={`Age-18`}
                  label={`18 +`}
                  onChange={() => handleCheckboxChange("age", "18")}
                />
              </div>
            ))}
          </Form>
          <h5>Theme</h5>
          <Form className="checkbox">
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`Theme-Flower`}
                  label={`Flowers`}
                  onChange={() => handleCheckboxChange("theme", "flower")}
                />
                <Form.Check
                  type={type}
                  id={`Theme-Car`}
                  label={`Cars`}
                  onChange={() => handleCheckboxChange("theme", "car")}
                />
                <Form.Check
                  type={type}
                  id={`Theme-Architecture`}
                  label={`Architecture`}
                  onChange={() => handleCheckboxChange("theme", "architecture")}
                />
              </div>
            ))}
          </Form>
          <h5>Price</h5>
          <Form className="checkbox">
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`Price-0`}
                  label={`0.00$ - 19.99$`}
                  onChange={() => handleCheckboxChange("price", "0")}
                />
                <Form.Check
                  type={type}
                  id={`Price-20`}
                  label={`20.00$ - 49.99$`}
                  onChange={() => handleCheckboxChange("price", "20")}
                />
                <Form.Check
                  type={type}
                  id={`Price-50`}
                  label={`50.00$ - 69.99$`}
                  onChange={() => handleCheckboxChange("price", "50")}
                />
                <Form.Check
                  type={type}
                  id={`Price-70`}
                  label={`70.00$ +`}
                  onChange={() => handleCheckboxChange("price", "70")}
                />
                <Form.Check
                  type={type}
                  id={`Price-Sale`}
                  label={`On Sale`}
                  onChange={() => handleCheckboxChange("onSale")}
                />
              </div>
            ))}
          </Form>
        </Col>
        <Col>
        <h3 className='txt-blue'>Our products</h3>
        <Container fluid>
          <Row className="justify-content-center card-gallery">
            <div className='card-gallery'>
              {filteredItems.map((Val) => {
                return (
                  Val.sale ? (
                    <SaleCard
                      key={Val.id}
                      image={Val.image}
                      title={Val.title}
                      text={Val.text}
                      price={`${Val.price.toFixed(2)}$`}
                      salePrice={`${Val.salePrice.toFixed(2)}$`}
                    />
                  ) : (
                  <CustomCard
                    key={Val.id}
                    image= {Val.image}
                    title= {Val.title}
                    text={Val.text}
                    price={`${Val.price.toFixed(2)}$`}
                  />
                  )
                  );
              })}

            </div>
          </Row>
        </Container>
        </Col>
      </Row>

    </div>
  );
}

export default Shop;
