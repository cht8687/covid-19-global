import React from 'react';
import KoFi from '../components/kofi/kofi';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';
import Layout from '../components/MyLayout';
import colours from '../styles/colours';

const Control = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.div`
  text-align: left;
  padding-top: 25px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonControl = styled.div`
  text-align: center;
  color: ${colours.dimWhite};
`;

const Disclaimer = styled.div`
  color: ${colours.dimWhite};
  font-size: 12px;
  width: 300px;
  padding: 30px 0;
`;

const MapDisclaimer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DataSource = styled(Title)`
  text-align: left;
  padding: 25px 25px;
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
        <Title style={{marginTop: '30px'}}>
          <Grid container justify="center" spacing={spacing}>
            <DataSource>
              Team members:
              <br />
              <br />
              <li>
                Predictionsi && Modelling:{' '}
                <a
                  target="'black"
                  href="https://www.linkedin.com/in/shuqing-yang-40173571/">
                  Assoc. Prof Shuqing Yang (PhD)
                </a>
              </li>
              <li>
                Website Developer:{' '}
                <a
                  target="'black"
                  href="https://www.linkedin.com/in/haotianchang/">
                  Robert Chang{' '}
                </a>
              </li>
              <li>
                Data/API Developer:{' '}
                <a target="'black" href="https://www.linkedin.com/in/davidslj/">
                  David Shen
                </a>
              </li>
              <li>
                UI/Dashboard Designer:{' '}
                <a
                  target="'black"
                  href="https://www.linkedin.com/in/sophia-chen-li/">
                  Sophia Li
                </a>
              </li>
            </DataSource>
          </Grid>
        </Title>
        <Title style={{marginTop: '30px'}}>
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
        <Title>If you 💖 this project you can buy me a coffee ☕</Title>
        <Grid container justify="center" spacing={spacing}>
          <DataSource>
            Data source:
            <br />
            <br />
            <li>
              <a target="_black" href="https://www.who.int/">
                WHO
              </a>
            </li>
            <li>
              <a
                target="_black"
                href="https://github.com/CSSEGISandData/COVID-19">
                Johns Hopkins CSSE
              </a>
            </li>
          </DataSource>
        </Grid>
        <Grid container justify="center" spacing={spacing}>
          <DataSource>
            If you have feedbacks or suggestions, please send us an email:
            <br />
            <a href="mailto:covid19boards@gmail.com" target="_top">
              covid19boards@gmail.com
            </a>
          </DataSource>
        </Grid>
        <ButtonControl>
          <Button variant="contained" color="primary" onClick={handleOnClick}>
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
