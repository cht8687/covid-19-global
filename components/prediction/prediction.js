import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import colours from '../../styles/colours';

const NewCarousel = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Carousel = styled(Grid)`
  margin: 0 auto !important;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

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
          <Img src="./images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-01.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-02.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-03.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-04.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-05.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-06.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-07.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-08.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-09.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-10.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-11.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-12.jpg"></Img>
          <Img src="./images/0424/COVID-19 By April 24-13.jpg"></Img>
        </Slider>
      );
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0424/Australia.png"></Img>
          <Img src="../images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="../images/0424/COVID-19 By April 24-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0424/France.png"></Img>
          <Img src="../images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="../images/0424/COVID-19 By April 24-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0424/USA.png"></Img>
          <Img src="../images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="../images/0424/COVID-19 By April 24-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0424/UK.png"></Img>
          <Img src="../images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="../images/0424/COVID-19 By April 24-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0424/Canada.png"></Img>
          <Img src="../images/0424/COVID-19 By April 24-00.jpg"></Img>
          <Img src="../images/0424/COVID-19 By April 24-01.jpg"></Img>
        </Slider>
      );
      break;
    default:
  }
};

class Prediction extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <>
        <NewCarousel item xs={12} lg={12}>
          Yang's Prediction - By University of Wollongong Associate Prof.
          Shu-Qing Yang
          <br />- Updated 24th April
        </NewCarousel>
        <Carousel item xs={12} lg={6}>
          {getWorldPredict(location)}
        </Carousel>
      </>
    );
  }
}

export default Prediction;
