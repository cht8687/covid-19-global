/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {only, down} from 'styled-breakpoints';
import getPercentage from '../utilities/getPercentage';
import colours from '../styles/colours';

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 10px 10px;
  background-color: ${colours.deepBlue};
  margin: 5px;
  color: ${colours.dimWhite};
`;

const ButtonTxt = styled(Button)`
  a {
    color: ${colours.dimWhite};
  }
`;

export default function NotificationBanner({location, data, total}) {
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
        <Grid item xs={12} lg={12}>
          Update:
          <ul>
            <li>🇦🇺Aust daily increase chart is added! 🎉🎉🎉 🦘🦘🦘🦘🦘</li>
          </ul>
          Thanks for visiting 😊 <br />
          Wish you and your family are safe and healthy.
          <br />
          Any suggestions/feedbacks, can send to our Telegram group:{' '}
          <a href="https://t.me/covid19boards" target="_blank">
            {' '}
            Telegram{' '}
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
