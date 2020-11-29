import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Park from './Park';

import parks from '../parks.json';

const randomParkName = (parks) => (
  parks[Math.floor(Math.random() * parks.length)].PARK_NAME
)

class Main extends Component {
  render() {
    const randomPark = randomParkName(parks)
    return (
      <Container className="parks">
        <Row className='buttons' >
          <Col xs={12} md={10}>
            <strong>Random Park: </strong><a href={'#' + randomPark}>{randomPark}</a>
          </Col>
        </Row>
        {parks.map((park, index) => (
          <Park
            key={index}
            name={park.PARK_NAME}
            address={park.ADDRESS} />
        ))}
      </Container>
    );
  }
}

export default Main;
