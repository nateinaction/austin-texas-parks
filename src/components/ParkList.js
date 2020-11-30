import { Row, Col } from 'react-bootstrap';
import Park from './Park';

const ParkList = (props) => (
  <div>
    <Row id={props.letter} className='letter'>
      <Col xs={12} md={10}>
        <h6>{props.letter}</h6>
      </Col>
    </Row>
    {props.parks.map((park, index) => (
      <Park
        key={index}
        name={park.PARK_NAME}
        address={park.ADDRESS} />
    ))}
  </div>
)

export default ParkList;
