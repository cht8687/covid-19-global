/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import colours from '../styles/colours';
import CountryGrid from './infoGrid/countryGrid';
import WorldGrid from './infoGrid/worldGrid';

const getInfoGrid = (country, data) => {
  switch (country) {
    case 'world':
      return <WorldGrid data={data} />;
    default:
      return <CountryGrid data={data} />;
  }
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colours.deepBlue};
  justify-content: center;
  border-bottom-left-radius: 15px;
`;

export default function InfoBoard({country, data}) {
  return (
    <Container>
      {!data ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={12} lg={3}>
            news
          </Grid>
          <Grid item xs={12} lg={9}>
            {getInfoGrid(country, data)}
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
