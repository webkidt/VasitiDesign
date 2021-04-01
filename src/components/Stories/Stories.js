import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Story from '../Story/Story';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
}));

function Stories() {
  const [stories, setStories] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

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
    <div className={classes.root}>
      <Box m='auto' width='80%' py={theme.spacing()}>
        <Grid container spacing={6}>
          {stories.map(story => {
            return <Story key={story.id} story={story} />;
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Stories;
