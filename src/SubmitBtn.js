import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function SubmitBtn() {
  const [picked, setPicked] = useState(false);

  const handleClick = () => {
    setPicked(!picked);
  };

  return (
    <Button
      className={picked ? 'outline-light' : 'lego-button'}
      onClick={handleClick}
      variant={picked ? 'lego-button' : 'outline-light'}
    >
      {picked ? 'Thank you!' : 'Submit'}
    </Button>
  );
}

export default SubmitBtn;