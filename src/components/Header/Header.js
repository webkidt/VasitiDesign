import { Typography, Grid, Paper, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation/Navigation';
// import SingleTestimonyHero from '../SingleTestimonyHero/SingleTestimonyHero';
import TestimonialImageDesktiop from '../../assets/img/testimonial-desktop.png';
import TestimonialImageMobile from '../../assets/img/testimonial-mobile.png';

const useStyles = makeStyles(theme => ({
  textContainer: {
    marginTop: theme.spacing(12),
    // paddingTop: theme.spacing(8),
    // paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      // paddingTop: theme.spacing(16),
      // paddingLeft: theme.spacing(16),
    },
  },
  heroTextBig: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: theme.spacing(4),
    lineHeight: '40px',
    letterSpacing: '-0.02em',
    [theme.breakpoints.up('md')]: {
      // width: '90%',
      // height: '180px',
      fontSize: theme.spacing(6),
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
  },
  heroSubText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: theme.spacing(2),
    lineHeight: '31px',
    letterSpacing: '0.02em',
    color: '#494949',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: '0',
    }
  },
  testimonialImage: {
    // height: '506px',
    // width: '477px',
    // marginLeft: theme.spacing(2),
    // paddingBottom: '0',
    // '& img': {
    //   marginBottom: '-3px',
    //   paddingBottom: '0'
    // },
    // backgroundImage: `url(${TestimonialImageDesktiop})`,
    [theme.breakpoints.up('md')]: {
      // width: '536px',
      // height: '568px',
      marginTop: theme.spacing(4),
      // marginLeft: '0',
    },
  },
}));

function Header() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const classes = useStyles();

  const TestimonialImage = isDesktop ? (
    <img
      className={classes.testimonialImage}
      src={TestimonialImageDesktiop}
      alt='Testimonial Desktop'
      style={{ marginBottom: '-3px' }}
    />
  ) : (
    <img
      className={classes.testimonialImage}
      width='100%'
      src={TestimonialImageMobile}
      alt='Testimonial Mobile'
      style={{ marginBottom: '-3px' }}
    />
  );

  return (
    <div>
      <Navigation />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box m='auto' width='80%' className={classes.textContainer}>
            <Typography className={classes.heroTextBig}>
              Amazing Experiences from Our Wonderful Customers
            </Typography>
            <Typography className={classes.heroSubText}>
              Here is what customers and vendors are saying about us, you can share your
              stories with us too.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            {TestimonialImage}
          </Box>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Paper className={classes.testimonialImage} elevation={0}>
            {TestimonialImage}
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Header;
