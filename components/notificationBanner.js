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
                <li>
                  Update: Added Daily Predictions from Associate Professor
                  Shuqing Yang, University of Wollongong (academic support for
                  www.covid19boards.com)
                </li>
                <li>Have a nice day! Stay home and stay safe!</li>
              </ul>
            </>
          )}
          {location === 'australia' && (
            <>
              <ul>
                Coronavirus AUS GOV official reports:
                <li>
                  <a
                    href="https://www.health.gov.au/sites/default/files/documents/2020/04/coronavirus-covid-19-at-a-glance-coronavirus-covid-19-at-a-glance-infographic_18.pdf"
                    target="_blank">
                    NSW reports
                  </a>
                  {`  |   `}
                  <a
                    href="https://www.health.qld.gov.au/news-events/doh-media-releases/releases/queensland-novel-coronavirus-covid-19-update30"
                    target="_blank">
                    QLD reports
                  </a>
                  {`  |   `}
                  <a
                    href="http://www2.sahealth.ha.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+topics/health+topics+a+-+z/covid+2019/latest+updates/confirmed+and+suspected+cases+of+covid-19+in+south+australia"
                    target="_blank">
                    SA reports
                  </a>
                  {`  |   `}
                  <a
                    href="https://www.wa.gov.au/organisation/department-of-the-premier-and-cabinet/covid-19-coronavirus-latest-updates"
                    target="_blank">
                    WA reports
                  </a>
                  {`  |   `}
                  <a
                    href="https://www.coronavirus.tas.gov.au/facts/cases-and-testing-updates"
                    target="_blank">
                    TAS reports
                  </a>
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
