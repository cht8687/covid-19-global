/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Country from '../components/maps/country';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Grid from '@material-ui/core/Grid';
import {useAsync} from 'react-async';
import {getUSAToday} from '../services/api';
import 'whatwg-fetch';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';
import NotificationBanner from '../components/notificationBanner';
import colours from '../styles/colours';
import Router from 'next/router';
import * as R from 'ramda';
import DisqusComp from '../components/disqus/disqus';
import GlobalLineTrendChart from '../components/charts/global/lineTrendChart/lineTrendChart';
import CountryDailyTotalIncreaseBar from '../components/charts/country/dailyTotalIncreaseBar/dailyTotalIncreaseBar';

const SiteContent = styled(Grid)`
  padding-top: 66px;
`;

const NewFeature = styled(Grid)`
  padding-top: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export default function Index() {
  const {data: dataUSARaw, error: errorUSA, isLoading: isLoadingUSA} = useAsync(
    {
      promiseFn: getUSAToday,
    },
  );

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataUSA, setToDisplayDataUSA] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');

  const [location, setLocation] = useState('usa');

  const sortList = R.compose(R.sort(R.descend(R.prop('total_cases'))));

  useEffect(() => {
    /* Ok, time is real tight to release, I can't figure out
     * a re-render issue, so let's repeat some code */
    if (dataUSARaw && location === 'usa') {
      const {country, states: list, timestamp} = dataUSARaw;
      let sortedList = sortList(list);
      const toDisplay = {
        total: country[0],
        list: sortedList,
        type: 'country',
      };
      setToDisplayData(toDisplay);
      setToDisplayDataUSA(toDisplay);
      setToDisplayTotal(country[0]);
      setToDisplayTimestamp(timestamp);
    }
  }, [dataUSARaw]);

  const handleCountryChange = e => {
    if (e.target.value) {
      if (e.target.value === 'world') {
        Router.push('/');
      } else {
        Router.push(`/${e.target.value}`);
      }
    }
  };

  return (
    <Layout>
      <SiteContent container spacing={1}>
        <Grid item xs={12} lg={12}>
          <Summary country={location} total={toDisplayTotal} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <NotificationBanner location={location} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBanner
            location={location}
            data={toDisplayData}
            total={toDisplayTotal}
            handleCountryChange={handleCountryChange}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          style={{
            padding: 20,
          }}>
          <Grid item xs={12} lg={12}>
            <Country
              data={toDisplayData}
              location={location}
              timestamp={toDisplayTimestamp}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            padding: 20,
          }}>
          <>
            <NewFeature item xs={12} lg={12}>
              Total Cases (USA)
            </NewFeature>
            <GlobalLineTrendChart location={location} />
          </>
        </Grid>
        <Grid item xs={12} lg={12}>
          <InfoBoard country={location} data={toDisplayDataUSA} />
        </Grid>
      </SiteContent>
      <DisqusComp commentId="usa" />
    </Layout>
  );
}
