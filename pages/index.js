/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Map from '../components/map';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Grid from '@material-ui/core/Grid';
import {getGlobalToday} from '../services/api';
import {useAsync} from 'react-async';
import 'whatwg-fetch';
import Layout from '../components/MyLayout';
import InfoBanner from '../components/InfoBanner';

const SiteContent = styled(Grid)`
  padding-top: 66px;
`;

export default function Index() {
  const {data, error, isLoading} = useAsync({promiseFn: getGlobalToday});
  const [location, setLocation] = useState('world');
  const [total, setTotal] = useState('');
  const [timestamp, setTimestamp] = useState('');
  useEffect(() => {
    if (data) {
      const {total, timestamp} = data;
      setTotal(total);
      setTimestamp(timestamp);
    }
  }, [data]);

  return (
    <Layout>
      <SiteContent container spacing={1}>
        <Grid container item xs={12} lg={4}>
          <Grid item xs={12} lg={12}>
            <InfoBanner location={location} data={data} total={total} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Map data={data} location={location} timestamp={timestamp} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Summary total={total} />
          <InfoBoard
            location={location}
            total={total}
            data={data}
            isLoading={isLoading}
          />
        </Grid>
      </SiteContent>
    </Layout>
  );
}
