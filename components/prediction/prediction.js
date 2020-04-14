import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
const Img = styled.img``;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const getWorldPredict = location => {
  switch (location) {
    case 'world':
      // code block
      return (
        <Slider {...settings}>
          <Img src="./images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-01.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-02.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-03.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-04.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-05.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-06.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-07.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-08.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-09.jpg"></Img>
          <Img src="./images/0413/COVID-19 By April 13-10.jpg"></Img>
        </Slider>
      );
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0413/Australia.png"></Img>
          <Img src="../images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="../images/0413/COVID-19 By April 13-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0413/France.png"></Img>
          <Img src="../images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="../images/0413/COVID-19 By April 13-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0413/USA.png"></Img>
          <Img src="../images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="../images/0413/COVID-19 By April 13-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0413/UK.png"></Img>
          <Img src="../images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="../images/0413/COVID-19 By April 13-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0413/Canada.png"></Img>
          <Img src="../images/0413/COVID-19 By April 13-00.jpg"></Img>
          <Img src="../images/0413/COVID-19 By April 13-01.jpg"></Img>
        </Slider>
      );
      break;
    default:
  }
};

class Prediction extends React.Component {
  render() {
    const {location} = this.props;
    return <div>{getWorldPredict(location)}</div>;
  }
}

export default Prediction;
