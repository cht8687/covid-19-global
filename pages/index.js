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
import {getGlobalToday, getUSAToday, getAustraliaToday} from '../services/api';
import {useAsync} from 'react-async';
import 'whatwg-fetch';
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
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export default function Index() {
  const {data: dataWorldRaw, error, isLoading} = useAsync({
    promiseFn: getGlobalToday,
  });
  const {data: dataUSARaw, error: errorUSA, isLoading: isLoadingUSA} = useAsync(
    {
      promiseFn: getUSAToday,
    },
  );
  const {
    data: dataAustraliaRaw,
    error: errorAustralia,
    isLoading: isLoadingAustralia,
  } = useAsync({
    promiseFn: getAustraliaToday,
  });

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataWorld, setToDisplayDataWorld] = useState('');
  const [toDisplayDataUSA, setToDisplayDataUSA] = useState('');
  const [toDisplayDataAustralia, setToDisplayDataAustralia] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');
  const [location, setLocation] = useState('world');

  const sortList = compose(sort(descend(prop('total_cases'))));

  useEffect(() => {
    if (dataWorldRaw && location === 'world') {
      const {total, timestamp} = dataWorldRaw;
      setToDisplayData(dataWorldRaw);
      setToDisplayDataWorld(dataWorldRaw);
      setToDisplayTotal(total);
      setToDisplayTimestamp(timestamp);
    }
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
    /* Ok, time is real tight to release, I can't figure out
     * a re-render issue, so let's repeat some code */
    if (dataAustraliaRaw && location === 'australia') {
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
  }, [dataWorldRaw, dataUSARaw, dataAustraliaRaw, location]);

  const handleCountryChange = e => {
    if (e.target.value) {
      setLocation(e.target.value);
    }
  };

  return (
    <Layout>
      <SiteContent container spacing={1}>
        <Grid item xs={12} lg={6} style={{paddingBottom: '15px'}}>
          {(location === 'australia' || location === 'world') && (
            <>
              <NewFeature item xs={12} lg={12}>
                Australia Daily Confirmed Cases
              </NewFeature>
              <CountryBarLabelRotation location={location} />
            </>
          )}
        </Grid>
        <Grid item xs={12} lg={6} style={{paddingBottom: '15px'}}>
          {(location === 'australia' || location === 'world') && (
            <>
              <NewFeature item xs={12} lg={12}>
                Australia Total Confirmed Cases
              </NewFeature>
              <CountryPieWithLineCharts location={location} />
            </>
          )}
        </Grid>
        <Grid container item xs={12} lg={location === 'world' ? 4 : 6}>
          <Grid item xs={12} lg={12}>
            <NotificationBanner />
          </Grid>
          <Grid item xs={12} lg={12}>
            <InfoBanner
              location={location}
              data={toDisplayData}
              total={toDisplayTotal}
              handleCountryChange={handleCountryChange}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            {location === 'world' ? (
              <World
                data={toDisplayData}
                location={location}
                timestamp={toDisplayTimestamp}
              />
            ) : (
              <Country
                data={toDisplayData}
                location={location}
                timestamp={toDisplayTimestamp}
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={location === 'world' ? 8 : 6}>
          <Summary country={location} total={toDisplayTotal} />
          {location === 'world' && (
            <InfoBoard country={location} data={toDisplayDataWorld} />
          )}
          {location === 'usa' && (
            <InfoBoard country={location} data={toDisplayDataUSA} />
          )}
          {location === 'australia' && (
            <InfoBoard country={location} data={toDisplayDataAustralia} />
          )}
        </Grid>
      </SiteContent>
    </Layout>
  );
}
