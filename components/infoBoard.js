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
import {only, down} from 'styled-breakpoints';

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

const NewFeature = styled(Grid)`
  padding-top: 15px;
  color: ${colours.dimWhite};
  text-align: left;
  font-size: 16px;
  ${down('tablet')} {
    display: none;
  }
`;

export default function InfoBoard({country, data}) {
  return (
    <Container>
      {!data ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <>
              <NewFeature item xs={12} lg={12}>
                If you have any ideas what you need, we can build for you, leave
                your comments below or send email to:{' '}
                <a href="mailto:covid19boards@gmail.com" target="_top">
                  covid19boards@gmail.com
                </a>{' '}
                <br />
                cheers.
              </NewFeature>
            </>
          </Grid>
          <Grid item xs={12} lg={9}>
            {getInfoGrid(country, data)}
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
