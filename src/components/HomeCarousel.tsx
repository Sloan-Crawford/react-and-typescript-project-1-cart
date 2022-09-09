import { Carousel } from 'react-bootstrap';

export function HomeCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/images/Slowdancing-With-Flowers.jpeg"
          // style={{objectFit: "cover"}}
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(255,255,255, 0.6)', borderRadius:'10px'}}>
          <h3>Embroidery Paintings</h3>
          <p>Current collection for sale in Store!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/images/Hermano.png"
          alt="Second slide"
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(255,255,255, 0.6)', borderRadius:'10px'}}>
          <h3>Portraits</h3>
          <p>New collection coming soon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img 
          className="d-block img-fluid"
          src="/images/Landscape.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(255,255,255, 0.6)', borderRadius:'10px'}}>
          <h3>Ladscapes</h3>
          <p>In progress</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}