import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Disqus from 'disqus-react';

const disqusShortname = 'covid19-boards';
const disqusConfig = {
  url: 'https://covid19boards.com',
  identifier: 'covid19-boards',
  title: 'COVID19 Boards',
};
const layoutStyle = {};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Grid item xs={12} lg={12}>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />{' '}
    </Grid>
  </div>
);

export default Layout;
