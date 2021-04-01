import { Grid, Box, Avatar, Typography, Chip, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { blue, green } from '@material-ui/core/colors';

import Profile from '../../assets/img/profile-1.png';

const useStyles = makeStyles(theme => ({
  large: {
    width: '150px',
    height: '150px',
    marginBottom: theme.spacing(2),
  },
  name: {
    marginBottom: `${theme.spacing()}px`,
    fontFamily: 'Inter',
  },
  location: {
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
      textTransform: 'capitalize',
    },
  },
  status: {
    borderRadius: '4px',
    fontFamily: 'Inter',
  },
  text: {
    marginTop: theme.spacing(),
    lineHeight: '24px',
    color: '#474747',
    fontFamily: 'Inter',
    [theme.breakpoints.down('md')]: {
      // marginRight: theme.spacing(4),
    },
  },
}));

function Story(props) {
  const classes = useStyles();
  const statusBackgroundColor = props.story.status ? '#EEF8FF' : '#F0FFEE';
  const statusColor = props.story.status ? '#0D019A' : '#049A01';
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <Grid item xs={12} md={4}>
      <Box m='auto' width='80%'>
        <Box>
          <Avatar className={classes.large} src={Profile} />
          <Typography variant='h6' className={classes.name}>
            {props.story.name}
          </Typography>
          <Box
            component='div'
            display='inline'
            marginRight={2}
            className={classes.location}
            fontSize={15}
            fontWeight={500}
          >
            {props.story.location}
          </Box>
          <Box component='div' display='inline'>
            <Chip
              className={classes.status}
              size='small'
              label={props.story.status ? 'CUSTOMER' : 'VENDOR'}
              style={{ backgroundColor: statusBackgroundColor, color: statusColor }}
            />
          </Box>
          <Typography variant={isDesktop ? 'body2' : 'body1'} className={classes.text}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
            pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure
            tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
            pariatur duis deserunt mollit dolore cillum minim tempor enim.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Story;
