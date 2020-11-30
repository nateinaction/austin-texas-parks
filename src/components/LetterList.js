import React, { Component } from 'react';
import ParkList from './ParkList';

const sortParks = (parks) => (
  parks.sort((a, b) => {
    let fa = a.PARK_NAME.toLowerCase();
    let fb = b.PARK_NAME.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  })
)

const createAlphabeticalList = (parks) => {
  const sortedParks = sortParks(parks);
  let currentLetter = "";
  let abcToIdx = {};
  let alphabeticalListing = [];

  for (const idx in sortedParks) {
    const park = sortedParks[idx];
    const parkFirstLetter = sortedParks[idx].PARK_NAME.charAt(0);
    currentLetter = currentLetter === parkFirstLetter ? currentLetter : parkFirstLetter;
    if (abcToIdx[currentLetter] === undefined) {
      abcToIdx[currentLetter] = alphabeticalListing.length
    }
    
    const currentIdx = abcToIdx[currentLetter]
    if (alphabeticalListing[currentIdx] === undefined) {
      alphabeticalListing[currentIdx] = {"letter": currentLetter, "parks": []}
    }
    alphabeticalListing[currentIdx]["parks"].push(park);
  }

  return alphabeticalListing;
}

class LetterList extends Component {
  render() {
    console.log(sortParks(this.props.parks));
    const alphabeticalListing = createAlphabeticalList(this.props.parks)
    console.log(alphabeticalListing);
    return (
      <div className="park-list">
        {alphabeticalListing.map((entry, idx) => (
          <span key={entry["letter"]}><a href={'#' + entry["letter"]}>{entry["letter"]}</a> </span>
        ))}
        {alphabeticalListing.map((entry, idx) => (
          <ParkList
            key={idx}
            letter={entry["letter"]}
            parks={entry["parks"]} />
        ))}
      </div>
    );
  }
}

export default LetterList;
