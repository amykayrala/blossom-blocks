import Card from 'react-bootstrap/Card';
import AddToCartBtn from './AddToCartBtn';
import './App.css';

function CustomCard({image, title, text, price, item, addToCart}) {
  return (
    <Card style={{ width: '18rem', margin: '12px'}}>
      <div style={{overflow: 'hidden', padding: '0.5rem'}} className="card-pic">
        <Card.Img variant="top" src={image}/>

      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Text>
            {price}
        </Card.Text>
        <AddToCartBtn item={item} addToCart={addToCart} className="button-pink" >Add to cart</AddToCartBtn>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;