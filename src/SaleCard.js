import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import salepic from './media/sale.png';
import AddToCartBtn from './AddToCartBtn';
import './App.css';

function SaleCard({image, title, text, price, salePrice}) {
  return (
    <Card style={{ width: '18rem'}}>

      <div className="card-pic" style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{textAlign: 'left', float: 'left', padding:'10px'}}>
          <img src={salepic} className="salepic" />

        </div>
        <Card.Img variant="top" src={image}/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Row style={{marginBottom: '16px'}}>
          <Col lg="4">
            <Card.Text style={{textDecoration: 'line-through'}}>
              {price}
            </Card.Text>
          </Col>
          <Col lg="4" style={{paddingLeft: '0'}}>
            <Card.Text style={{ color:'#e84c4d'}}>
              {salePrice}
            </Card.Text>
          </Col>
        </Row>
        <AddToCartBtn className="button-pink" variant="primary">Add to cart</AddToCartBtn>
      </Card.Body>
    </Card>
  );
}

export default SaleCard;