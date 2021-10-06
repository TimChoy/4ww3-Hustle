import { Carousel } from 'react-bootstrap';
import '../App.css';
import gym1 from '../Assets/gym1.jpg';
import gym2 from '../Assets/gym2.jpg';

function Hustle() {
  return (
    <div className="Hustle">
      <Carousel fade controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gym1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gym2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hustle;
