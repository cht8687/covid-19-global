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
          <Img src="./images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-01.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-02.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-03.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-04.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-05.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-06.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-07.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-08.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-09.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-10.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-11.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-12.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-13.jpg"></Img>
          <Img src="./images/0428/COVID-19 By April 28-14.jpg"></Img>
        </Slider>
      );
      break;

    case 'australia':
      return (
        <Slider {...settings}>
          <Img src="../images/0428/Australia.png"></Img>
          <Img src="../images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="../images/0428/COVID-19 By April 28-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'france':
      return (
        <Slider {...settings}>
          <Img src="../images/0428/France.png"></Img>
          <Img src="../images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="../images/0428/COVID-19 By April 28-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'usa':
      return (
        <Slider {...settings}>
          <Img src="../images/0428/USA.png"></Img>
          <Img src="../images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="../images/0428/COVID-19 By April 28-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'uk':
      return (
        <Slider {...settings}>
          <Img src="../images/0428/UK.png"></Img>
          <Img src="../images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="../images/0428/COVID-19 By April 28-01.jpg"></Img>
        </Slider>
      );
      break;

    case 'canada':
      return (
        <Slider {...settings}>
          <Img src="../images/0428/Canada.png"></Img>
          <Img src="../images/0428/COVID-19 By April 28-00.jpg"></Img>
          <Img src="../images/0428/COVID-19 By April 28-01.jpg"></Img>
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
          <br />- Updated 28th April
        </NewCarousel>
        <Carousel item xs={12} lg={6}>
          {getWorldPredict(location)}
        </Carousel>
      </>
    );
  }
}

export default Prediction;
