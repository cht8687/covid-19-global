/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Country from '../components/maps/country';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid';
import {getAustraliaToday} from '../services/api';
import {useAsync} from 'react-async';
import 'whatwg-fetch';
import {only, down} from 'styled-breakpoints';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';
import NotificationBanner from '../components/notificationBanner';
import colours from '../styles/colours';
import {
  curry,
  reduce,
  assoc,
  keys,
  compose,
  map,
  pick,
  sort,
  descend,
  prop,
} from 'ramda';
import CountryPieWithLineCharts from '../components/charts/country/pieWithLine/pieWithLine';
import CountryBarLabelRotation from '../components/charts/country/barLabelRotation/barLabelRotation';

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

const IFrameHolder = styled(Grid)`
  overflow: hidden;
  // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
  padding-top: 56.25%;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
`;

const IFrameContainer = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const IFrameMiddle = styled.div`
  height: 545px;
  ${down('tablet')} {
    height: 450px;
  }
  ${only('tablet')} {
    height: 450px;
  }
`;

export default function Index() {
  const {
    data: dataAustraliaRaw,
    error: errorAustralia,
    isLoading: isLoadingAustralia,
  } = useAsync({
    promiseFn: getAustraliaToday,
  });

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataAustralia, setToDisplayDataAustralia] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');

  const [location, setLocation] = useState('australia');

  const sortList = compose(sort(descend(prop('total_cases'))));

  useEffect(() => {
    /* Ok, time is real tight to release, I can't figure out
     * a re-render issue, so let's repeat some code */
    if (dataAustraliaRaw) {
      const {country, states: list, timestamp} = dataAustraliaRaw;
      let sortedList = sortList(list);
      const toDisplay = {
        total: country[0],
        list: sortedList,
        type: 'country',
      };
      setToDisplayData(toDisplay);
      setToDisplayDataAustralia(toDisplay);
      setToDisplayTotal(country[0]);
      setToDisplayTimestamp(timestamp);
    }
  }, [dataAustraliaRaw]);

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
        <Grid item xs={12} lg={6} style={{padding: 20}}>
          <>
            <NewFeature item xs={12} lg={12}>
              Australia Daily Confirmed Cases
            </NewFeature>
            <CountryBarLabelRotation location={location} />
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
              Australia Total Confirmed Cases
            </NewFeature>
            <CountryPieWithLineCharts location={location} />
          </>
        </Grid>
        <IFrameHolder
          item
          xs={12}
          lg={6}
          style={{
            padding: 20,
          }}>
          <IFrameMiddle>
            <IFrameContainer
              src="https://e.infogr.am/nsw-covid-19-spread-map-1h7k23g3v0pe4xr?src=embed#async_embed"
              scrolling="no"
              frameborder="0"
              allowfullscreen=""></IFrameContainer>{' '}
          </IFrameMiddle>
        </IFrameHolder>
        <IFrameHolder
          item
          xs={12}
          lg={6}
          style={{
            padding: 20,
          }}>
          <IFrameMiddle>
            <IFrameContainer
              src="https://e.infogr.am/1p067pqwzp39d9iegq6gg9ygewanelm1ep9?src=embed#async_embed"
              scrolling="no"
              frameborder="0"
              allowfullscreen=""></IFrameContainer>{' '}
          </IFrameMiddle>
        </IFrameHolder>
        )}
        <Grid item xs={12} lg={12}>
          <InfoBoard country={location} data={toDisplayDataAustralia} />
        </Grid>
      </SiteContent>
    </Layout>
  );
}
