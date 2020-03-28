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
  const {data, error, isLoading} = useAsync({
    promiseFn: getGlobalToday,
  });
  const {data: dataUSA, error: errorUSA, isLoading: isLoadingUSA} = useAsync({
    promiseFn: getUSAToday,
  });
  const [total, setTotal] = useState('');
  const [totalUSA, setTotalUSA] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [timestampUSA, setTimestampUSA] = useState('');
  const [location, setLocation] = useState('WORLD');
  useEffect(() => {
    if (data) {
      const {total, timestamp} = data;
      setTotal(total);
      setTimestamp(timestamp);
    }
  }, [data]);

  useEffect(() => {
    if (dataUSA) {
      const {total: totalUSA, timestamp} = dataUSA;
      setTotalUSA(totalUSA);
      setTimestampUSA(timestamp);
    }
  }, [dataUSA]);

  const handleCountryChange = e => {
    setLocation(e.target.value);
  };

  return (
    <Layout>
      <SiteContent container spacing={1}>
        <Grid container item xs={12} lg={4}>
          <Grid item xs={12} lg={12}>
            <NotificationBanner />
          </Grid>
          <Grid item xs={12} lg={12}>
            <InfoBanner
              location={location}
              data={data}
              total={total}
              handleCountryChange={handleCountryChange}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <World data={data} location={location} timestamp={timestamp} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Summary country={location} total={total} />
          <InfoBoard country={location} data={data} />
        </Grid>
      </SiteContent>
    </Layout>
  );
}
