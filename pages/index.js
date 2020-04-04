/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import World from '../components/maps/world';
import Country from '../components/maps/country';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Grid from '@material-ui/core/Grid';
import {getGlobalToday, getGlobalYesterday} from '../services/api';
import {useAsync} from 'react-async';
import 'whatwg-fetch';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';
import NotificationBanner from '../components/notificationBanner';
import colours from '../styles/colours';
import Router from 'next/router';
import {compose, sort, descend, prop} from 'ramda';
import GlobalLineTrendChart from '../components/charts/global/lineTrendChart/lineTrendChart';
import GlobalTopNewCasesBarChart from '../components/charts/global/topNewCasesBarChart/topNewCasesBarChart';
import {only, down} from 'styled-breakpoints';
import DisqusComp from '../components/disqus/disqus';

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
  const {data: dataWorldRaw, error, isLoading} = useAsync({
    promiseFn: getGlobalToday,
  });
  const {
    data: dataWorldYesterdayRaw,
    errorYesterday,
    isLoadingYesterday,
  } = useAsync({
    promiseFn: getGlobalYesterday,
  });

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataWorld, setToDisplayDataWorld] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');
  const [
    toDisplayDataWorldYesterday,
    setToDisplayDataWorldYesterday,
  ] = useState('');
  const [location, setLocation] = useState('world');

  const sortList = compose(sort(descend(prop('total_cases'))));

  useEffect(() => {
    if (dataWorldRaw) {
      const {total, timestamp} = dataWorldRaw;
      setToDisplayData(dataWorldRaw);
      setToDisplayDataWorld(dataWorldRaw);
      setToDisplayTotal(total);
      setToDisplayTimestamp(timestamp);
    }

    if (dataWorldYesterdayRaw && location === 'world') {
      setToDisplayDataWorldYesterday(dataWorldYesterdayRaw);
    }
  }, [dataWorldRaw, dataWorldYesterdayRaw]);

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
          lg={12}
          style={{
            padding: 20,
          }}>
          <Grid item xs={12} lg={12}>
            <World
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
              Total Cases (worldwide)
            </NewFeature>
            <GlobalLineTrendChart location={location} />
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
              Daily Increases (worldwide)
            </NewFeature>
            <GlobalTopNewCasesBarChart data={dataWorldYesterdayRaw} />
          </>
        </Grid>
        <Grid item xs={12} lg={12}>
          <InfoBoard country={location} data={toDisplayDataWorld} />
        </Grid>
      </SiteContent>
      <DisqusComp commentId="world" />
    </Layout>
  );
}
