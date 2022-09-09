import { Card, Button } from 'react-bootstrap';


export function AboutCards() {
  return (
   <div>
   <div className='mb-3'><h1>About</h1></div>
    <div className="d-flex justify-content-center">
<Card style={{ width: '80vw'}} className="d-flex align-items-center"> 
      <Card.Img className="d-flex align-items-center" variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}
