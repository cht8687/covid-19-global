/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import ContainerImp from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {down} from 'styled-breakpoints';
import {data} from '../const/data';

const Container = styled(ContainerImp)`
  display: flex;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
  ${down('tablet')} {
    padding: 0px 10px;
  }
`;

const SubContainer = styled(Grid)`
  padding: 25px;
  text-align: center;
  ${down('tablet')} {
    padding: 10px 10px;
  }
`;

const Paper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Control = styled.div`
  padding: 10px;
`;

const Diff = styled.div`
  height: 29px;
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: 700;
  ${down('tablet')} {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

const Value = styled.div`
  font-size: 70px;
  margin-bottom: 14px;
  font-weight: 800;
  ${down('tablet')} {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

const Label = styled.div`
  font-size: 30px;
  font-weight: 700;
  ${down('tablet')} {
    font-size: 16px;
  }
`;

const Location = styled.div`
  font-size: 60px;
  font-weight: 800;
  ${down('tablet')} {
    font-size: 20px;
  }
`;

const StaState = styled.div`
  color: #e4e4e4;
`;

const StaActive = styled.div`
  color: #df0e1f;
`;

const StaDeceased = styled.div`
  color: #ffffb3;
`;

const StaUnderInvestigation = styled.div`
  color: #1da1f2;
`;

const StaExcluded = styled.div`
  color: #80da83;
`;

const StaConfirmed = styled.div`
  color: #f44334;
`;

const StaRecovered = styled.div`
  color: #259c1e;
`;

const getData = location => {};

export default function InfoBoard({location}) {
  const d = getData(location);

  return (
    <div>
      <Container maxWidth="lg" />
    </div>
  );
}
