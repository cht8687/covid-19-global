/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import ContainerImp from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoTable from './infoTable';

const Container = styled(ContainerImp)`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
  padding: 30px 10px;
  background-color: #445175;
  border-radius: 15px;
  margin: 5px;
`;

export default function InfoBoard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={3} lg={3}>
                281,119 confirmed
              </Grid>
              <Grid item xs={3} lg={3}>
                11,540 Death
              </Grid>
              <Grid item xs={3} lg={3}>
                7,734 serious
              </Grid>
              <Grid item xs={3} lg={3}>
                91,133 recovered
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={12}>
          <InfoTable />
        </Grid>
      </Grid>
    </Container>
  );
}
