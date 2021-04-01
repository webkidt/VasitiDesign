import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Story from '../Story/Story';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    flexGrow: 1,
  },
}));

function Stories() {
  const [stories, setStories] = useState([]);
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 960px)');

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    try {
      const response = await axios.get(
        'https://60610820ac47190017a70697.mockapi.io/api/stories'
      );
      setStories(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Grid container className={classes.root} spacing={isDesktop ? 6 : 1}>
        {stories.map(story => {
          return <Story key={story.id} story={story} />;
        })}
      </Grid>
    </Container>
  );
}

export default Stories;
