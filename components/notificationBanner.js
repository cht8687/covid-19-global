/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import {upperCase} from 'upper-case';
import styled, {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {only, down} from 'styled-breakpoints';
import getPercentage from '../utilities/getPercentage';
import colours from '../styles/colours';
import {Facebook, Twitter} from 'react-social-sharing';

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
  const url = `https://www.covid19boards.com/`;
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          {location === 'world' && (
            <>
              <ul>
                <li>Update: Added Total Cases and Daily Increases charts</li>
                <li>Have a nice day! Stay home and stay safe!</li>
              </ul>
            </>
          )}
          {location === 'australia' && (
            <>
              <ul>
                <li>Gday! Update: Added Australia NSW suburbs map </li>
                <li>
                  Coronavirus Aus Gov Msg: Stay home this Easter & help save
                  lives. Only leave for what you really need + exercise, work,
                  medical & care.{' '}
                </li>
              </ul>
            </>
          )}
          {location !== 'world' && location !== 'australia' && (
            <>
              <ul>
                <li>
                  Update: More {upperCase(location)} charts are coming soon!
                </li>
                <li>Have a nice day! Stay home and stay safe!</li>
              </ul>
            </>
          )}
          <>
            <ul>
              <li>
                Share with your friends, family or coworkers. Keep them up to
                date{' '}
                <a href="https://t.me/covid19boards" target="_blank">
                  Covid19Boards
                </a>
              </li>
              <Facebook link={url} />
              <Twitter link={url} />
            </ul>
          </>
        </Grid>
      </Grid>
    </Container>
  );
}
