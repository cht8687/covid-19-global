/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import ContainerImp from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoTable from './infoTable';
import colours from '../styles/colours';

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 30px 10px;
  background-color: #445175;
  padding-left: 10px !import;
  padding-right: 10px !import;
  border-radius: 15px;
  margin: 5px;
`;

const Confirmed = styled.div`
  color: ${colours.red};
`;

const Deceased = styled.div`
  color: ${colours.grey};
`;

const Recovered = styled.div`
  color: ${colours.green};
`;

const Serious = styled.div`
  color: ${colours.blue};
`;

export default function InfoBoard() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <InfoTable />
        </Grid>
      </Grid>
    </Container>
  );
}
