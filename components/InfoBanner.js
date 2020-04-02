/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {only, down} from 'styled-breakpoints';
import getPercentage from '../utilities/getPercentage';
import colours from '../styles/colours';
import {upperCase} from 'upper-case';
import {DeceasedColor, RecoveredColor} from '../styles/sharedStyle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {COUNTRY_SELECTIONS} from '../const/countrySelections';
import MyTheme from '../theme/theme';

const Numbers = css`
  font-size: 25px;
  font-weight: bold;
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
  padding: 10px 10px;
  background-color: ${colours.deepBlue};
  margin: 5px;
`;

const CountrySelection = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: center;
`;

const Location = styled(Grid)`
  color: ${colours.dimWhite};
  font-weight: bold;
  font-size: 24px;
`;

const Statistics = styled(Grid)`
  color: ${colours.dimWhite};
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DeathRate = styled(Grid)`
  ${Numbers}
  ${DeceasedColor}
`;

const RecoveredRate = styled(Grid)`
  ${Numbers}
  ${RecoveredColor}
`;

const styles = theme => ({
  icon: {
    display: none,
  },
});

export default function InfoBanner({
  location,
  data,
  total,
  handleCountryChange,
}) {
  const [deathRate, setDeathRate] = useState('');
  const [recoverRate, setRecoverRate] = useState('');

  useEffect(() => {
    if (total) {
      const deathRate = getPercentage(total.total_deaths, total.total_cases);
      const recoverRate = getPercentage(
        total.total_recovered,
        total.total_cases,
      );
      setDeathRate(deathRate);
      setRecoverRate(recoverRate);
    }
  }, [total]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Location item xs={12} lg={4}>
          <CountrySelection>
            <Select value={location} onChange={handleCountryChange}>
              {COUNTRY_SELECTIONS.map((country, index) => (
                <MenuItem key={index} value={country}>
                  {upperCase(country)}
                </MenuItem>
              ))}
            </Select>
          </CountrySelection>
        </Location>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={1}>
            <Statistics item xs={6} lg={6}>
              Death <DeathRate>{deathRate} %</DeathRate>
            </Statistics>
            <Statistics item xs={6} lg={6}>
              Recovered{' '}
              <RecoveredRate>
                {!recoverRate || isNaN(recoverRate)
                  ? 'N/A'
                  : `${recoverRate} %`}{' '}
              </RecoveredRate>
            </Statistics>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
