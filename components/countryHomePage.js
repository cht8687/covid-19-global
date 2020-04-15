/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {upperCase} from 'upper-case';
import Country from '../components/maps/country';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Grid from '@material-ui/core/Grid';
import {useAsync} from 'react-async';
import {getCountryToday} from '../services/api';
import 'whatwg-fetch';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';
import apiCountryNameMapping from '../const/apiCountryNameMapping';
import NotificationBanner from '../components/notificationBanner';
import colours from '../styles/colours';
import Router from 'next/router';
import * as R from 'ramda';
import DisqusComp from '../components/disqus/disqus';
import GlobalLineTrendChart from '../components/charts/global/lineTrendChart/lineTrendChart';
import CountryDailyTotalIncreaseBar from '../components/charts/country/dailyTotalIncreaseBar/dailyTotalIncreaseBar';

import Prediction from '../components/prediction/prediction';

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

const NewCarousel = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Carousel = styled(Grid)`
  margin: 0 auto !important;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

export default function Index({country}) {
  const {
    data: dataCountryRaw,
    error: errorCountry,
    isLoading: isLoadingCountry,
  } = useAsync({
    promiseFn: getCountryToday,
    country: apiCountryNameMapping[country]
      ? apiCountryNameMapping[country]
      : country,
  });

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataCountry, setToDisplayDataCountry] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');

  const [location, setLocation] = useState(country);

  const sortList = R.compose(R.sort(R.descend(R.prop('total_cases'))));

  useEffect(() => {
    /* Ok, time is real tight to release, I can't figure out
     * a re-render issue, so let's repeat some code */
    if (dataCountryRaw) {
      const {country, states: list, timestamp} = dataCountryRaw;
      let sortedList = sortList(list);
      const toDisplay = {
        total: country[0],
        list: sortedList,
        type: 'country',
      };
      setToDisplayData(toDisplay);
      setToDisplayDataCountry(toDisplay);
      setToDisplayTotal(country[0]);
      setToDisplayTimestamp(timestamp);
    }
  }, [dataCountryRaw]);

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
          item
          xs={12}
          lg={12}
          style={{
            padding: 15,
          }}>
          <Prediction location={location} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <InfoBoard country={location} data={toDisplayDataCountry} />
        </Grid>
        <Grid item xs={12} lg={6} style={{padding: '0 20px'}}>
          <>
            <NewFeature item xs={12} lg={12}>
              Daily New Cases and Death in {upperCase(country)}
            </NewFeature>
            <CountryDailyTotalIncreaseBar location={location} />
          </>
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
              Total Cases {upperCase(country)}
            </NewFeature>
            <GlobalLineTrendChart location={location} />
          </>
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
      </SiteContent>
      <DisqusComp commentId={country} />
    </Layout>
  );
}
