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

const Disclaimer = styled.div`
  color: #ffffb3;
  font-size: 12px;
  width: 80%;
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
          If you 💖 this project you can buy us a coffee ☕ to surport our work,
          we are trying hard to update the site with more functionality.
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
          <Button variant="contained" color="primary" onClick={handleOnClick}>
            Back to Dashboard
          </Button>
        </ButtonControl>

        <Grid container justify="center" spacing={spacing}>
          <Disclaimer>
            **The views and options expressed in this blog are those of the
            authors and do not necessarily reflect the official policy or
            position of any other agency, organization, employer or company
            Authors are not responsible for any errors or omissions, or for the
            results obtained from the use of this information. All information
            in this site is provided "as is", with no guarantee of completeness,
            accuracy, timeliness or of the results obtained from the use of this
            information We do not make any warranties about the completeness,
            reliability and accuracy of these information. None of the authors,
            contributors, adminstrators or anyone else connected with this
            website, in anyway whatsoever, can be responsible for your use of
            the information contained in or linked from these web pages. Any
            action you take upon the information on this website is strictly at
            your own risk. and we will not be liable for any losses and damages
            in connection with the use of our website.{' '}
          </Disclaimer>{' '}
        </Grid>
      </Control>
    </Layout>
  );
}
