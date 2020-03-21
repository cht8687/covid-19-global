/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {only, down} from 'styled-breakpoints';
import InfoTable from './infoTable';
import colours from '../styles/colours';

const Numbers = css`
  font-size: 50px;
  ${down('tablet')} {
    font-size: 18px;
  }
  ${only('tablet')} {
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 30px 10px;
  background-color: #445175;
  padding-left: 10px !import;
  padding-right: 10px !import;
  border-radius: 15px;
  margin: 5px;
  color: ${colours.dimWhite};
  font-weight: bold;
`;

const Confirmed = styled.div`
  ${Numbers}
  color: ${colours.red};
`;

const Deceased = styled.div`
  ${Numbers}
  color: ${colours.pink};
`;

const Recovered = styled.div`
  ${Numbers}
  color: ${colours.green};
`;

const Serious = styled.div`
  ${Numbers}
  color: ${colours.blue};
`;

const NumBlock = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${down('tablet')} {
    font-size: 14px;
  }
  ${only('tablet')} {
    font-size: 18px;
  }
`;

export default function Summary() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2}>
            <NumBlock item xs={3} lg={3}>
              <Confirmed>281,119</Confirmed> confirmed
            </NumBlock>
            <NumBlock item xs={3} lg={3}>
              <Deceased>11,540</Deceased> Death
            </NumBlock>
            <NumBlock item xs={3} lg={3}>
              <Serious>7,734</Serious> serious
            </NumBlock>
            <NumBlock item xs={3} lg={3}>
              <Recovered>91,133</Recovered>
              recovered
            </NumBlock>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
