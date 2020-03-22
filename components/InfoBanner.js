/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import colours from '../styles/colours';

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 30px 10px;
  background-color: ${colours.deepBlue};
  border-radius: 15px;
  margin: 5px;
`;

export default function InfoBanner({location, data}) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          {location}
        </Grid>
      </Grid>
    </Container>
  );
}
