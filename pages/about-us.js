import React from 'react';
import KoFi from '../components/kofi/kofi';
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

const Disclaimer = styled.div`
  color: #ffffb3;
  font-size: 12px;
  width: 80%;
  padding: 30px 0;
`;

const MapDisclaimer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
          If you 💖 this project you can buy us a coffee ☕
          <KoFi color="#26bbe0" id="X8X31J5HH" label="Buy Me a Coffee" /> <br />
          to surport our work, we are trying hard to update the site with more
          functionality.
        </Title>
        <Title>😊 Thank you!</Title>

        <Grid container justify="center" spacing={spacing}>
          <Title>
            Data source:
            <br />
            <a target="_black" href="https://www.who.int/">
              WHO
            </a>
          </Title>
        </Grid>

        <Grid container justify="center" spacing={spacing}>
          <Title>
            If you have feedbacks or suggestions, please send us an email:
            <br />
            <a href="mailto:covid19boards@gmail.com" target="_top">
              covid19boards@gmail.com
            </a>
          </Title>
        </Grid>

        <ButtonControl>
          <Button variant="contained" color="secondary" onClick={handleOnClick}>
            Back to Dashboard
          </Button>
        </ButtonControl>

        <MapDisclaimer container justify="center" spacing={spacing}>
          <Title> Map disclaimer </Title>
          <Disclaimer>
            The designations employed and the presentation of the material on
            this map do not imply the expression of any opinion whatsoever on
            the part of the Secretariat of the United Nations concerning the
            legal status of any country, territory, city or area or of its
            authorities, or concerning the delimitation of its frontiers or
            boundaries. Every effort is made to ensure this map is free of
            errors but there is no warrant the map or its features are either
            spatially or temporally accurate or fit for a particular use. This
            map is provided without any warranty of any kind whatsoever, either
            express or implied.{' '}
          </Disclaimer>{' '}
        </MapDisclaimer>

        <Grid container justify="center" spacing={spacing}>
          <Disclaimer>
            ** All information in this site is provided "as is", with no
            guarantee of completeness, accuracy, timeliness or of the results
            obtained from the use of this information We do not make any
            warranties about the completeness, reliability and accuracy of these
            information. None of the authors, contributors, adminstrators or
            anyone else connected with this website, in anyway whatsoever, can
            be responsible for your use of the information contained in or
            linked from these web pages. Any action you take upon the
            information on this website is strictly at your own risk. and we
            will not be liable for any losses and damages in connection with the
            use of our website.{' '}
          </Disclaimer>{' '}
        </Grid>
      </Control>
    </Layout>
  );
}
