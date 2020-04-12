import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const Img = styled.img``;

const generateImgsUrls = () => {
  let urls = [];
  for (let i = 1; i < 34; i++) {
    urls.push(`./images/${i}.png`);
  }
  return urls;
};

const IMG_URLS = generateImgsUrls();

class Prediction extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {IMG_URLS.map((url, index) => (
          <img src={url} key={index}></img>
        ))}
      </Slider>
    );
  }
}

export default Prediction;
