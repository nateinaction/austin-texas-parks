import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Park from './Park';

import parks from '../parks.json';
import LetterList from './LetterList';

const randomPark = (parks) => (
  parks[Math.floor(Math.random() * parks.length)]
)

class Main extends Component {
  render() {
    const featuredPark = randomPark(parks)
    return (
      <Container className="parks">
        <Park
          name={featuredPark.PARK_NAME}
          address={featuredPark.ADDRESS}
          featured={true} />
        <LetterList parks={parks}/>
      </Container>
    );
  }
}

export default Main;
