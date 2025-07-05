import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function AddToCartBtn() {
  const [picked, setPicked] = useState(false);

  const handleClick = () => {
    setPicked(!picked);
  };

  return (
    <Button
      className={picked ? 'button-pink' : 'button-pink'}
      onClick={handleClick}
      variant={picked ? 'button-pink' : 'button-pink'}
    >
      {picked ? 'Added!' : 'Add to Cart'}
    </Button>
  );
}

export default AddToCartBtn;