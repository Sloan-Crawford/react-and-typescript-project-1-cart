import { Carousel, Image } from 'react-bootstrap';

function HomeCarousel() {
  return (
    <Carousel >
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/public/images/Branching-Out.jpeg"
          // style={{objectFit: "cover"}}
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius:'10px'}}>
          <h3>Embroidery Paintings</h3>
          <p>Current collection for sale in Store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/public/images/OUT-OF-SILENCE-WE-WILL-SING.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius:'10px'}}>
          <h3>Embroidery Paintings</h3>
          <p>Current collection for sale in Store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500} style={{height:"75vh"}}>
        <img
          className="d-block img-fluid"
          src="/public/images/Slowdancing-With-Flowers.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius:'10px'}}>
          <h3>Embroidery Paintings</h3>
          <p>Current collection for sale in Store</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;