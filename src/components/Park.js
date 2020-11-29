import './Park.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Park = (props) => (
  <Row className='park' >
    <Col xs={12} md={10}>
    <Card id={props.name}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className='address'>{props.address}</Card.Text>
        <Button href={'http://maps.google.com/maps?q=' + props.address} variant="secondary">Google Maps</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
)
  
export default Park