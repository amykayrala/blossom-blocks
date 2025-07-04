import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({image, title, text, price, sale}) {
  return (
    <Card style={{ width: '18rem'}}>
      <div className="card-pic">
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
        <Button className="button-pink" variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;