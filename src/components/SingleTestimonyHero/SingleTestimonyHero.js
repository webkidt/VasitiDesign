import {
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Box,
  Chip,
  useTheme,
} from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import LadiesSmilingImageMobile from '../../assets/img/ladies-smiling-mobile.png';
import LadiesSmilingImageDesktop from '../../assets/img/ladies-smiling-mobile.png';

// import SlantMobile from '../../assets/img/slant-line-mobile.svg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: props => (props.vendor ? '#FFF8F5' : '#222222'),
  },
  customerTextContainer: {
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(8),
    backgroundColor: props => (props.vendor ? '#FFF8F5' : '#222222'),
  },
  customerTitleText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    lineSpacing: '0.05em',
  },
  customerSmilingImg: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8),
    },
  },
  customerChip: {
    borderColor: '#ffffff',
    borderRadius: '10px',
    color: '#FFFFFF',
    marginTop: theme.spacing(2),
  },
  customerBodyText: {
    color: '#FFFFFF',
    marginTop: theme.spacing(2),
    fontFamily: 'Inter',
    lineHeight: '24px',
  },
  customerShareText: {
    color: theme.palette.grey[100],
    marginTop: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
}));

function SingleTestimonyHero(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 960px)');

  const desktopImage = (
    <Grid item md={6}>
      <Box display='flex' width='100%'>
        <Box m='auto' marginTop={theme.spacing() / 2}>
          <img
            src={LadiesSmilingImageDesktop}
            className={classes.customerSmilingImg}
            alt=''
          />
        </Box>
      </Box>
    </Grid>
  );

  const mobileImage = (
    <Grid item xs={12}>
      <img src={LadiesSmilingImageMobile} alt='' className={classes.customerSmilingImg} />
    </Grid>
  );

  const customerTitleText = isDesktop ? (
    <Typography className={classes.customerTitleText}>Tolu & Joy's Experience</Typography>
  ) : (
    <Typography className={classes.customerTitleText}>Oby's Experience</Typography>
  );

  const customerLayout = (
    <Grid container justify='center'>
      {isDesktop ? desktopImage : null}
      <Grid item xs={12} md={6}>
        {/* <Container maxWidth='xs' className={classes.customerTextContainer}>{customerTitleText}</Container> */}
        <Box m='auto' width='80%' className={classes.customerTextContainer}>
          {customerTitleText}
          <Chip variant='outlined' label='Customer' className={classes.customerChip} />
          <Typography variant='body1' className={classes.customerBodyText}>
            I had the best experience shopping with vasiti. Usability of the website was
            great, very good customer service, an all round great experience. I would
            definately be coming back! I had the best experience shopping with vasiti.
            Usability of the website was great, very good customer service, an all round
            great experience. I would definately be coming back!
          </Typography>
          <Box>
            <Typography className={classes.customerShareText}>
              Share your own story!
            </Typography>
          </Box>
        </Box>
      </Grid>
      {!isDesktop ? mobileImage : null}
    </Grid>
  );

  const vendorLayout = (
    <Grid container>
      {!isDesktop ? mobileImage : null}
      <Grid item xs={12} md={6}></Grid>
      {isDesktop ? desktopImage : null}
    </Grid>
  );

  return (
    <Paper elevation={0} className={classes.root}>
      {props.vendor ? vendorLayout : customerLayout}
    </Paper>
  );
}

export default SingleTestimonyHero;
