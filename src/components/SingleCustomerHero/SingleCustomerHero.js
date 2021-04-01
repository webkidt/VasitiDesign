import {
  Grid,
  Container,
  Typography,
  useMediaQuery,
  Box,
  Chip,
  useTheme,
} from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import LadiesSmilingImageMobile from '../../assets/img/black-beautiful-ladies-smiling-1.png';
import LadiesSmilingImageDesktop from '../../assets/img/ladies-smiling-mobile.png';

// import SlantMobile from '../../assets/img/slant-line-mobile.svg';

// const useStyles = makeStyles(theme => ({
//   root: {
//     // backgroundColor: props => (props.vendor ? '#FFF8F5' : '#222222'),
//   },
//   customerTextContainer: {
//     marginTop: theme.spacing(13),
//     marginBottom: theme.spacing(8),
//     // backgroundColor: props => (props.vendor ? '#FFF8F5' : '#222222'),
//   },
//   customerTitleText: {
//     color: '#FFFFFF',
//     fontFamily: 'Inter',
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     fontSize: '24px',
//     lineHeight: '29px',
//     lineSpacing: '0.05em',
//   },
//   customerSmilingImg: {
//     [theme.breakpoints.up('md')]: {
//       paddingLeft: theme.spacing(8),
//     },
//   },
//   customerChip: {
//     borderColor: '#ffffff',
//     borderRadius: '10px',
//     color: '#FFFFFF',
//     marginTop: theme.spacing(2),
//   },
//   customerBodyText: {
//     color: '#FFFFFF',
//     marginTop: theme.spacing(2),
//     fontFamily: 'Inter',
//     lineHeight: '24px',
//   },
//   customerShareText: {
//     color: theme.palette.grey[100],
//     marginTop: theme.spacing(4),
//     textTransform: 'uppercase',
//     letterSpacing: '0.2em',
//     fontWeight: '500',
//     fontFamily: 'Inter',
//   },
// }));

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
    // fontWeight: '600',
    letterSpacing: '0.05em',
    // lineHeight: '29px',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
      fontWeight: 'bold',
      letterSpacing: '0.01em',
      // lineHeight: '39px',
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
  // testimonialImage: {
  //   // height: '506px',
  //   // width: '477px',
  //   marginLeft: theme.spacing(2),
  //   paddingBottom: '0',
  //   '& img': {
  //     marginBottom: '-3px',
  //     paddingBottom: '0',
  //   },
  //   // backgroundImage: `url(${TestimonialImageDesktiop})`,
  //   [theme.breakpoints.up('md')]: {
  //     // width: '536px',
  //     // height: '568px',
  //     marginTop: theme.spacing(4),
  //     marginLeft: '0',
  //   },
  // },
}));

function SingleCustomerHero(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const backgroundColor = props.vendor ? '#FFF8F5' : '#222222';

  const desktopImage = (
    // <Grid item md={6}>
    //   <Box display='flex' width='100%'>
    //     <Box m='auto' marginTop={theme.spacing() / 2}>
    //       <img
    //         src={LadiesSmilingImageDesktop}
    //         className={classes.customerSmilingImg}
    //         alt=''
    //       />
    //     </Box>
    //   </Box>
    // </Grid>
    <Box m='auto' p='auto' width='80%' marginTop={theme.spacing() / 2}>
      <img
        width='90%'
        src={LadiesSmilingImageDesktop}
        className={classes.customerSmilingImg}
        alt=''
      />
    </Box>
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
    <div className={classes.root}>
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6}>
            {isDesktop ? desktopImage : null}
          </Grid>
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
                <Typography className={classes.customerShareText}>
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
