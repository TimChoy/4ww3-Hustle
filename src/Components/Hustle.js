import { Carousel } from 'react-bootstrap';
import '../Styles/Hustle.css';
import gym1 from '../Assets/gym1.jpg';
import gym2 from '../Assets/gym2.jpg';

function Hustle() {
    return (
        <div className="Hustle">
            <Carousel fade controls={false} interval={2000}>
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
            <div className="Title" >
                <h1>
                    Find your next workout
                </h1>
            </div>
        </div>
    );
}

export default Hustle;
