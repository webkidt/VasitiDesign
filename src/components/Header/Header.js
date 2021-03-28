import { Typography, Grid, Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation/Navigation';
// import SingleTestimonyHero from '../SingleTestimonyHero/SingleTestimonyHero';
import TestimonialImageDesktiop from '../../assets/img/testimonial-desktop.png';
import TestimonialImageMobile from '../../assets/img/testimonial-mobile.png';

const useStyles = makeStyles(theme => ({
  heroTextBox: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(16),
      paddingLeft: theme.spacing(16),
    },
  },
  heroTextBig: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: theme.spacing(4),
    lineHeight: '40px',
    letterSpacing: '-0.02em',
    width: '90%',
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
    marginLeft: theme.spacing(2),
    paddingBottom: '0',
    '& img': {
      marginBottom: '-3px',
      paddingBottom: '0'
    },
    // backgroundImage: `url(${TestimonialImageDesktiop})`,
    [theme.breakpoints.up('md')]: {
      // width: '536px',
      // height: '568px',
      marginTop: theme.spacing(4),
      marginLeft: '0',
    },
  },
}));

function Header() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const classes = useStyles();

  const TestimonialImage = isDesktop ? (
    <img src={TestimonialImageDesktiop} alt='Testimonial Desktop' />
  ) : (
    <img src={TestimonialImageMobile} alt='Testimonial Mobile' />
  );

  return (
    <div>
      <Navigation />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.heroTextBox}>
          <Typography className={classes.heroTextBig}>
            Amazing Experiences from Our Wonderful Customers
          </Typography>
          <Typography className={classes.heroSubText}>
            Here is what customers and vendors are saying about us, you can share your
            stories with us too.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.testimonialImage} elevation={0}>
            {TestimonialImage}
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper><Typography>Hello</Typography></Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Header;
