import { Grid, Typography, useMediaQuery, Box, Chip, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LadiesSmilingImageMobile from '../../assets/img/black-beautiful-ladies-smiling-1.png';
import LadiesSmilingImageDesktop from '../../assets/img/ladies-smiling-mobile.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: theme.background.dark,
  },
  detailsContainer: {},
  titleText: {
    color: theme.palette.common.white,
    fontFamily: 'Inter',
    fontSize: theme.spacing(3),
    fontWeight: '600',
    letterSpacing: '0.05em',
    lineHeight: '39px',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
      fontWeight: 'bold',
      letterSpacing: '0.01em',
    },
  },
  chip: {
    marginTop: theme.spacing(),
    color: theme.palette.common['white'],
    borderRadius: '4px',
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  bodyText: {
    color: theme.palette.common['white'],
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(4),
    fontFamily: 'Inter',
    fontWeight: 'normal',
    lineHeight: '170%',
    letterSpacing: '0.02em',
    [theme.breakpoints.up('md')]: {
      width: '75%',
      marginTop: theme.spacing(3),
      fontSize: theme.spacing(2.25),
      lineHeight: '150%',
    },
  },
  shareText: {
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontSize: theme.spacing(1.8),
    fontWeight: '500',
    lineHeight: '32px',
    letterSpacing: '0.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(2),
    },
  },
}));

function SingleCustomerHero(props) {
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
          src={LadiesSmilingImageDesktop}
          className={classes.customerSmilingImg}
          alt=''
          style={{}}
        />
      </Box>
    </Grid>
  );

  const mobileImage = (
    <Box m='auto' width='100%'>
      <img
        width='100%'
        src={LadiesSmilingImageMobile}
        alt=''
        className={classes.customerSmilingImg}
      />
    </Box>
  );

  const customerTitleText = isDesktop ? (
    <Typography className={classes.titleText}>Tolu & Joy's Experience</Typography>
  ) : (
    <Typography className={classes.titleText}>Oby's Experience</Typography>
  );

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Grid container spacing={isDesktop ? 0 : theme.spacing()}>
          {isDesktop ? desktopImage : null}
          <Grid item xs={12} md={6}>
            <Box
              m='auto'
              width='80%'
              marginTop={isDesktop ? theme.spacing(1.5) : theme.spacing()}
            >
              {customerTitleText}
              <Chip variant='outlined' label='Customer' className={classes.chip} />
              <Typography variant='body2' className={classes.bodyText}>
                I had the best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great experience. I
                would definately be coming back! I had the best experience shopping with
                vasiti. Usability of the website was great, very good customer service, an
                all round great experience. I would definately be coming back!
              </Typography>
              <Box>
                <Typography className={classes.shareText}>
                  Share your own story!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {!isDesktop ? mobileImage : null}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SingleCustomerHero;
