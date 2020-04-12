/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {only, down} from 'styled-breakpoints';
import {useRouter} from 'next/router';
import {makeStyles} from '@material-ui/core/styles';
import colours from '../styles/colours';
import CircularProgress from '@material-ui/core/CircularProgress';
import formatNumber from '../utilities/formatNumber';
import {upperCase} from 'upper-case';
import FlipNumbers from 'react-flip-numbers';
import getFlipnumberSize from '../utilities/getFlipnumberSize';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {
  ConfirmedColor,
  DeceasedColor,
  RecoveredColor,
  SeriousColor,
} from '../styles/sharedStyle';
import {COUNTRY_SELECTIONS} from '../const/countrySelections';

const useStyles = makeStyles(theme => ({
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'yellow !important',
  },
}));

const Numbers = css`
  font-size: 35px;
  ${down('tablet')} {
    font-size: 18px;
  }
  ${only('tablet')} {
    font-size: 24px;
  }
`;

const ButtonControl = styled.div`
  text-align: center;
  color: ${colours.dimWhite};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colours.dimWhite};
  font-weight: bold;
  justify-content: center;
  position: sticky;
  padding: 25px 60px;
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

const CountrySelection = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${colours.lightBlue};
`;

const CountrySelect = styled(Select)`
  margin-left: 20px;
  color: ${colours.lightBlue} !important;
  &:before {
    border-color: ${colours.lightBlue} !important;
  }
  &:after {
    border-color: ${colours.lightBlue} !important;
  }
`;

const Location = styled(Grid)`
  color: ${colours.dimWhite};
  font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Summary({total, location, handleCountryChange}) {
  if (!total) {
    return (
      <Container>
        <CircularProgress color="secondary" />
      </Container>
    );
  }
  const router = useRouter();
  const classes = useStyles();
  const totalCases = formatNumber(total.total_cases);
  const deceased = formatNumber(total.total_deaths);
  const serious = !total.serious_critical
    ? 'N/A'
    : formatNumber(total.serious_critical);
  const recovered = !total.total_recovered
    ? 'N/A'
    : formatNumber(total.total_recovered);
  const {height: fH, width: fW} = getFlipnumberSize();
  const handleOnClick = () => {
    router.push('/');
  };
  return (
    <Container>
      {!total ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid
          container
          spacing={2}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Location item xs={12} lg={3}>
            <ButtonControl>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOnClick}>
                World
              </Button>
            </ButtonControl>
            <CountrySelect
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
              variant="outlined"
              value={location}
              onChange={handleCountryChange}>
              {COUNTRY_SELECTIONS.map((country, index) => (
                <MenuItem key={index} value={country}>
                  {upperCase(country)}
                </MenuItem>
              ))}
            </CountrySelect>
          </Location>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={2}>
              <NumBlock item xs={3} lg={3}>
                <Confirmed
                  height={fH}
                  width={fW}
                  play
                  color={colours.red}
                  nonNumberStyle={{
                    color: colours.red,
                    fontSize: `${fH}px`,
                  }}
                  perspective={130}
                  duration={5}
                  numbers={totalCases}
                />
                Confirmed
              </NumBlock>
              <NumBlock item xs={3} lg={3}>
                <Deceased
                  height={fH}
                  width={fW}
                  play
                  color={colours.wheat}
                  nonNumberStyle={{
                    color: colours.wheat,
                    fontSize: `${fH}px`,
                  }}
                  perspective={140}
                  duration={3}
                  numbers={deceased}
                />
                Deceased
              </NumBlock>
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
                  perspective={140}
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
                  perspective={140}
                  duration={3}
                  numbers={recovered}
                />
                Recovered
              </NumBlock>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
