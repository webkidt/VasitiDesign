import {
  Grid,
  Typography,
  useMediaQuery,
  Box,
  Chip,
  Avatar,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SlantedOrange from '../../assets/img/slanted-orange.svg';
import WomanShoppingBagDesktop from '../../assets/img/woman-shopping-bag-desktop.png';
import WomanShoppingBagMobile from '../../assets/img/woman-shopping-bag-mobile.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: theme.background.light,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(8, 'auto', 0),
  },
  titleText: {
    color: '#242120',
    fontFamily: 'Inter',
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
    lineHeight: '39px',
    letterSpacing: '0.01em',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
    },
  },
  chip: {
    marginTop: theme.spacing(),
    textTransform: 'uppercase',
    borderRadius: '4px',
    borderColor: 'rgba(255, 92, 0, 0.4)',
    fontSize: theme.spacing(1.63),
    fontFamily: 'Inter',
    fontWeight: '500',
    letterSpacing: '0.02em',
    lineHeight: theme.spacing(2),
  },
  bodyText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontFamily: 'Inter',
    fontSize: theme.spacing(2),
    fontWeight: 'normal',
    lineHeight: '170%',
    letterSpacing: '0.02em',
    [theme.breakpoints.up('md')]: {
      width: '90%',
      fontSize: theme.spacing(2.25),
    },
  },
  shareText: {
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: theme.spacing(2),
    fontWeight: '500',
    lineHeight: '32px',
    letterSpacing: '0.2em',
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },
}));

function SingleVendorHero() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 960px)');

  const desktopImage = (
    <Grid item xs={12} md={6}>
      <Box
        m='auto'
        width='85%'
        marginTop={theme.spacing() / 2}
        display='flex'
        justifyContent='center'
      >
        <img
          width='80%'
          src={WomanShoppingBagDesktop}
          alt=''
          // style={{ marginBottom: '-4px' }}
        />
      </Box>
    </Grid>
  );

  const mobileImage = (
    <Grid item xs={12} md={6}>
      <Avatar className={classes.large} src={WomanShoppingBagMobile} />
      {/* <Box >
        <img
          width='100%'
          src={WomanShoppingBagMobile}
          alt=''
          // style={{ marginBottom: '-4px' }}
        />
      </Box> */}
    </Grid>
  );

  const customerTitleText = isDesktop ? (
    <Typography className={classes.titleText}>Josiah's Experience</Typography>
  ) : (
    <Typography className={classes.titleText}>Victoria's Experience</Typography>
  );

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Grid container spacing={isDesktop ? 0 : theme.spacing()}>
          {!isDesktop ? mobileImage : null}
          <Grid item xs={12} md={6}>
            <Box m='auto' width='80%' marginTop={isDesktop ? theme.spacing(1.5) : 0}>
              {customerTitleText}
              <Chip
                color='primary'
                variant='outlined'
                label='Vendor'
                className={classes.chip}
              />
              <Typography variant='body2' className={classes.bodyText}>
                I had the best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great experience. I
                would definately be coming back! I had the best experience shopping with
                vasiti. Usability of the website was great, very good customer service, an
                all round great experience. I would definately be coming back!
              </Typography>
              <Box>
                <Typography color='primary' className={classes.shareText}>
                  Share your own story!
                </Typography>
                <Box mt='-8px' mb={theme.spacing()}>
                  <img src={SlantedOrange} alt='' style={{ width: '279px' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          {isDesktop ? desktopImage : null}
        </Grid>
      </Box>
    </div>
  );
}

export default SingleVendorHero;
