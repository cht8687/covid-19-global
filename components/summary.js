/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {only, down} from 'styled-breakpoints';
import {useRouter} from 'next/router';
import colours from '../styles/colours';
import CircularProgress from '@material-ui/core/CircularProgress';
import formatNumber from '../utilities/formatNumber';
import {upperCase} from 'upper-case';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FlipNumbers from 'react-flip-numbers';
import getFlipnumberSize from '../utilities/getFlipnumberSize';
import PaperBase from '@material-ui/core/Paper';
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

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    border: `1px solid ${colours.lightBlue}`,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const Paper = withStyles(theme => ({
  root: {
    backgroundColor: `${colours.dark}`,
    height: '140px',
    display: 'flex',
    alignItems: 'center',
  },
}))(PaperBase);

const SummaryBoard = withStyles(theme => ({}))(Grid);

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
  padding: 25px 0;
`;

const Confirmed = styled.div`
  ${ConfirmedColor}
`;

const Deceased = styled.div`
  ${DeceasedColor}
`;

const Recovered = styled.div`
  ${RecoveredColor}
`;

const Serious = styled.div`
  ${SeriousColor}
`;

const ConfirmedNum = styled(FlipNumbers)`
  ${ConfirmedColor}
  ${Numbers}
`;

const DeceasedNum = styled(FlipNumbers)`
  ${DeceasedColor}
  ${Numbers}
`;

const RecoveredNum = styled(FlipNumbers)`
  ${RecoveredColor}
  ${Numbers}
`;

const SeriousNum = styled(FlipNumbers)`
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
        <Grid container spacing={2} style={{}}>
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
              variant="outlined"
              value={location}
              input={<BootstrapInput />}
              onChange={handleCountryChange}>
              {COUNTRY_SELECTIONS.map((country, index) => (
                <MenuItem key={index} value={country}>
                  {upperCase(country)}
                </MenuItem>
              ))}
            </CountrySelect>
          </Location>
          <SummaryBoard item xs={12} lg={9}>
            <Paper elevation={12}>
              <Grid container spacing={2}>
                <NumBlock item xs={3} lg={3}>
                  <Confirmed>Confirmed</Confirmed>
                  <ConfirmedNum
                    height={fH}
                    width={fW}
                    play
                    color={colours.brown}
                    nonNumberStyle={{
                      color: colours.brown,
                      fontSize: `${fH}px`,
                    }}
                    perspective={130}
                    duration={5}
                    numbers={totalCases}
                  />
                </NumBlock>
                <NumBlock item xs={3} lg={3}>
                  <Recovered>Recovered</Recovered>
                  <RecoveredNum
                    height={fH}
                    width={fW}
                    play
                    color={colours.lightBlue}
                    nonNumberStyle={{
                      color: colours.lightBlue,
                      fontSize: `${fH}px`,
                    }}
                    perspective={140}
                    duration={3}
                    numbers={recovered}
                  />
                </NumBlock>
                <NumBlock item xs={3} lg={3}>
                  <Deceased>Deceased</Deceased>
                  <DeceasedNum
                    height={fH}
                    width={fW}
                    play
                    color={colours.red}
                    nonNumberStyle={{
                      color: colours.red,
                      fontSize: `${fH}px`,
                    }}
                    perspective={140}
                    duration={3}
                    numbers={deceased}
                  />
                </NumBlock>
                <NumBlock item xs={3} lg={3}>
                  <Serious>Critical</Serious>
                  <SeriousNum
                    height={fH}
                    width={fW}
                    play
                    color={colours.white}
                    nonNumberStyle={{
                      color: colours.white,
                      fontSize: `${fH}px`,
                    }}
                    perspective={140}
                    duration={3}
                    numbers={serious}
                  />
                </NumBlock>
              </Grid>
            </Paper>
          </SummaryBoard>
        </Grid>
      )}
    </Container>
  );
}
