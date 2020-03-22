/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {only, down} from 'styled-breakpoints';
import colours from '../styles/colours';
import CircularProgress from '@material-ui/core/CircularProgress';
import formatNumber from '../utilities/formatNumber';

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
  flex-wrap: wrap;
  background-color: ${colours.deepBlue};
  padding: 15px 0;
  color: ${colours.dimWhite};
  font-weight: bold;
  justify-content: center;
  position: sticky;
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

export default function Summary({total}) {
  const {
    total_cases,
    total_deaths,
    active_cases,
    serious_critical,
    total_recovered,
  } = total;
  return (
    <Container>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <Grid container spacing={2}>
              <NumBlock item xs={3} lg={3}>
                <Confirmed>{formatNumber(total_cases)}</Confirmed> Confirmed
              </NumBlock>
              <NumBlock item xs={3} lg={3}>
                <Deceased>{formatNumber(total_deaths)}</Deceased> Deceased
              </NumBlock>
              <NumBlock item xs={3} lg={3}>
                <Serious>{formatNumber(serious_critical)}</Serious> Critical
              </NumBlock>
              <NumBlock item xs={3} lg={3}>
                <Recovered>{formatNumber(total_recovered)}</Recovered>
                Recovered
              </NumBlock>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
