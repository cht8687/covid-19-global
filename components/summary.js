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
import FlipNumbers from 'react-flip-numbers';
import getFlipnumberSize from '../utilities/getFlipnumberSize';
import {
  ConfirmedColor,
  DeceasedColor,
  RecoveredColor,
  SeriousColor,
} from '../styles/sharedStyle';
import Paper from '@material-ui/core/Paper';

const Numbers = css`
  font-size: 15px;
  ${down('tablet')} {
    font-size: 12px;
  }
  ${only('tablet')} {
    font-size: 12px;
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

const Confirmed = styled(FlipNumbers)`
  ${ConfirmedColor}
  ${Numbers}
`;

const Deceased = styled(FlipNumbers)`
  ${DeceasedColor}
  ${Numbers}
`;

const Recovered = styled(FlipNumbers)`
  ${RecoveredColor}
  ${Numbers}
`;

const Serious = styled(FlipNumbers)`=
  ${SeriousColor}
  ${Numbers}
`;

const NumContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NumRow = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
}
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
  background: ${colours.grey};
  border-radius: 4px;
  border: 1px solid ${colours.dark};
  font-weight: 700;
  text-align: center;
  padding: 7px;
  line-height: 1;
  box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.64);
`;

export default function Summary({total}) {
  if (!total) {
    return (
      <Container>
        <CircularProgress color="secondary" />
      </Container>
    );
  }
  const totalCases = formatNumber(total.total_cases);
  const deceased = formatNumber(total.total_deaths);
  const serious = !total.serious_critical
    ? 'N/A'
    : formatNumber(total.serious_critical);
  const recovered = !total.total_recovered
    ? 'N/A'
    : formatNumber(total.total_recovered);
  const {height: fH, width: fW} = getFlipnumberSize();
  return (
    <Container>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <NumContainer container spacing={5}>
          <NumRow item xs={6} lg={12}>
            <NumBlock>
              <Confirmed
                height={fH}
                width={fW}
                play
                color={colours.red}
                nonNumberStyle={{
                  color: colours.red,
                  fontSize: `${fH}px`,
                }}
                perspective={330}
                duration={5}
                numbers={totalCases}
              />
              Confirmed
            </NumBlock>
            <NumBlock>
              <Deceased
                height={fH}
                width={fW}
                play
                color={colours.wheat}
                nonNumberStyle={{
                  color: colours.wheat,
                  fontSize: `${fH}px`,
                }}
                perspective={330}
                duration={3}
                numbers={deceased}
              />
              Deceased
            </NumBlock>
          </NumRow>
          <NumRow item xs={6} lg={12}>
            <NumBlock item xs={3} lg={3}>
              <Serious
                height={fH}
                width={fW}
                play
                color={colours.pinkDark}
                nonNumberStyle={{
                  color: colours.pinkDark,
                  fontSize: `${fH}px`,
                }}
                perspective={330}
                duration={3}
                numbers={serious}
              />
              Critical
            </NumBlock>
            <NumBlock item xs={3} lg={3}>
              <Recovered
                height={fH}
                width={fW}
                play
                color={colours.green}
                nonNumberStyle={{
                  color: colours.green,
                  fontSize: `${fH}px`,
                }}
                perspective={330}
                duration={3}
                numbers={recovered}
              />
              Recovered
            </NumBlock>
          </NumRow>
        </NumContainer>
      )}
    </Container>
  );
}
