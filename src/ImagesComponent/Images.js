import React, { Component } from 'react';
import './Images.css';

export default class Images extends Component {

  render() {

    function shuffle(arra1) {
      var ctr = arra1.length, temp, index;
  // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }
  const pics = [
    require('../Img/OJ-original.png'),
    require('../Img/OJ-shephard.png'),
    require('../Img/OJ-disciple.png'),
    require('../Img/EM-original.png'),
    require('../Img/EM-shephard.png'),
    require('../Img/NL-original.png'),
    require('../Img/NL-shephard.png')
  ];
  console.log(shuffle(pics));

    
    const pic = pics[Math.floor((Math.random() * 7))]
    return (
      <>
        <img className='pic' position='center' id='pic' src={pic} alt='pic' width= '200px'/>
      </>
    )
  }
}