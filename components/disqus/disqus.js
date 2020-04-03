import Disqus from 'disqus-react';
import Grid from '@material-ui/core/Grid';

const disqusShortname = 'covid19-boards';
const disqusConfig = {
  url: 'https://covid19boards.com',
  identifier: 'covid19-boards',
  title: 'COVID19 Boards',
};

const DisqusComp = commentId => (
  <Grid item xs={12} lg={12}>
    <Disqus.DiscussionEmbed
      commentId={commentId}
      shortname={disqusShortname}
      config={disqusConfig}
    />{' '}
  </Grid>
);

export default DisqusComp;
