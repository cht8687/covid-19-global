import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import colours from '../styles/colours';
import ReactLoading from 'react-loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colours.deepBlue};
  color: ${colours.dimWhite};
  height: 100vh;
  text-align: center;
`;

const LoadingContainer = styled(Grid)`
  color: ${colours.dimWhite};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextContainer = styled(Grid)`
  color: ${colours.dimWhite};
  align-items: center;
  font-weight: bold;
`;

export default function Loading() {
  const type = 'bars';
  const color = colours.dimWhite;
  return (
    <Container>
      <LoadingContainer item xs={12} lg={12}>
        <TextContainer>Loading latest data for you!</TextContainer>
        <ReactLoading type={type} color={color} height="50px" width="50px" />
      </LoadingContainer>
    </Container>
  );
}
