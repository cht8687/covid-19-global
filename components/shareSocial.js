import React, {Component} from 'react';
import {
  FacebookShareCount,
  RedditShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  WeiboShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  WeiboIcon,
} from '../src';

import './Demo.css';
import exampleImage from './react-share-pin-example.png';
import styled from 'styled-components';

const Demosomenetwork = styled.div`
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
`;

const Demosomenetworksharecount = styled.div`
  display: inline-flex;
  justify-content: center;
  white-space: nowrap;
  overflow: visible;
  width: 0;
  margin-top: 3px;
  font-size: 12px;
`;

const Demosomenetworksharebutton = styled.div`
  cursor: pointer;
`;

const Demosomenetworkcustomicon = styled.div`
  width: 32px;
  height: 32px;
`;

class Demo extends Component {
  render() {
    const shareUrl = 'http://covid19boards.com';
    const title = 'COVID-19 Boards';

    return (
      <div className="Demo__container">
        <Demosomenetwork>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount
              url={shareUrl}
              className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </Demosomenetwork>

        <Demosomenetwork>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </Demosomenetwork>

        <Demosomenetwork>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </Demosomenetwork>

        <Demosomenetwork>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </Demosomenetwork>

        <Demosomenetwork>
          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </Demosomenetwork>

        <Demosomenetwork>
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <RedditIcon size={32} round />
          </RedditShareButton>

          <div>
            <RedditShareCount
              url={shareUrl}
              className="Demo__some-network__share-count"
            />
          </div>
        </Demosomenetwork>

        <Demosomenetwork>
          <WeiboShareButton
            url={shareUrl}
            title={title}
            image={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button">
            <WeiboIcon size={32} round />
          </WeiboShareButton>
        </Demosomenetwork>
      </div>
    );
  }
}

export default Demo;
