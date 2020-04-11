import React from 'react';
import styled from 'styled-components';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import Grid from '@material-ui/core/Grid';

const TwitterWrapper = styled.div`
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const TwitterContainer = () => {
  return (
    <TwitterWrapper>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="WHO"
        options={{
          tweetLimit: '10',
          width: '100%',
          height: '300px',
        }}
        theme="dark"
        noHeader="true"
        noBorders="true"
        noFooter="true"></TwitterTimelineEmbed>
    </TwitterWrapper>
  );
};

export default TwitterContainer;
