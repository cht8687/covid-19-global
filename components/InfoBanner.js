/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import {only, down} from 'styled-breakpoints';
import getPercentage from '../utilities/getPercentage';
import colours from '../styles/colours';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {DeceasedColor, RecoveredColor} from '../styles/sharedStyle';
import PaperBase from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
`;

const Statistics = styled(Grid)`
  color: ${colours.dimWhite};
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Paper = withStyles(theme => ({
  root: {
    backgroundColor: `${colours.dark}`,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
}))(PaperBase);

const DeathRate = styled(Grid)`
  ${Numbers}
  ${DeceasedColor}
`;

const RecoveredRate = styled(Grid)`
  ${Numbers}
  ${RecoveredColor}
`;

export default function InfoBanner({data, total}) {
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
    <Paper elevation={12}>
      <Grid container spacing={2}>
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
    </Paper>
  );
}
