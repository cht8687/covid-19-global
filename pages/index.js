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
import {getGlobalToday, getUSAToday} from '../services/api';
import {useAsync} from 'react-async';
import 'whatwg-fetch';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';
import NotificationBanner from '../components/notificationBanner';

const SiteContent = styled(Grid)`
  padding-top: 66px;
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

  const [toDisplayData, setToDisplayData] = useState('');
  const [toDisplayDataWorld, setToDisplayDataWorld] = useState('');
  const [toDisplayDataUSA, setToDisplayDataUSA] = useState('');
  const [toDisplayTotal, setToDisplayTotal] = useState('');
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState('');
  const [location, setLocation] = useState('world');

  useEffect(() => {
    if (dataWorldRaw && location === 'world') {
      const {total, timestamp} = dataWorldRaw;
      setToDisplayData(dataWorldRaw);
      setToDisplayDataWorld(dataWorldRaw);
      setToDisplayTotal(total);
      setToDisplayTimestamp(timestamp);
    }
    if (dataUSARaw && location === 'usa') {
      const {total, timestamp} = dataUSARaw;
      setToDisplayData(dataUSARaw);
      setToDisplayDataUSA(dataUSARaw);
      setToDisplayTotal(total);
      setToDisplayTimestamp(timestamp);
    }
  }, [dataWorldRaw, dataUSARaw, location]);

  const handleCountryChange = e => {
    if (e.target.value !== 'australia') {
      setLocation(e.target.value);
    }
  };

  return (
    <Layout>
      <SiteContent container spacing={1}>
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
            <InfoBoard country={location} data={toDisplayDataUSA} />
          )}
        </Grid>
      </SiteContent>
    </Layout>
  );
}
