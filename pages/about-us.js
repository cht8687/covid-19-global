import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import PaperImp from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';
import Layout from '../components/MyLayout';

const Paper = styled(PaperImp)`
  height: 140;
  width: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.div`
  color: #ffffb3;
  font-size: 25px;
  text-align: center;
  padding: 20px 0 20px 0;
`;

const ButtonControl = styled.div`
  margin-top: 50px;
  text-align: center;
  color: white;
  margin-bottom: 100px;
`;

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/');
  };

  return (
    <Layout>
      <Control>
        <Title>
          Share this site to your family 👨‍👩‍👧‍👧 and friends to keep updated <br />{' '}
          with lastest statistics of covid-19 🦠 virus report
        </Title>
        <Title>
          Wash 🧼 hands 👐 often with soap and running water, for at least 20{' '}
          <br />
          seconds. Try not to touch your eyes, nose or mouth. We wish you and
          your <br />
          family always healthy! 🤗
        </Title>
        <Title>
          If you 💖 this project you can buy us a coffee ☕ to surport our work
        </Title>
        <Title>😊 Thank you!</Title>

        <Grid container justify="center" spacing={spacing}></Grid>

        <ButtonControl>
          <Button variant="contained" color="primary" onClick={handleOnClick}>
            Back to Dashboard
          </Button>
        </ButtonControl>
      </Control>
    </Layout>
  );
}
