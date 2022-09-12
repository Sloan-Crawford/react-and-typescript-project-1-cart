import { Carousel } from 'react-bootstrap';

export function HomeCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/images/Slowdancing-With-Flowers.jpeg"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(255,255,255, 0.8)', borderRadius:'5px', padding:
      "0.6rem"}}>
          <h3>Embroidery Paintings</h3>
          <p>Current collection for sale in Store!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/images/MotherToAll.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(255,255,255, 0.8)', borderRadius:'5px', padding:
      "0.6rem"}}>
          <h3>Portraits</h3>
          <p>New collection coming soon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img 
          className="d-block img-fluid"
          src="/images/LookUpAtTheStars.jpeg"
          alt=""
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(255,255,255, 0.8)', borderRadius:'5px', padding:
      "0.6rem"}}>
          <h3>Ladscapes</h3>
          <p>In progress</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}