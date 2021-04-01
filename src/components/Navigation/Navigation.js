import { AppBar, Toolbar, Container, Grid, Divider, IconButton, Button, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/img/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function Navigation() {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 960px)');

  const navDivider = isDesktop ? <Divider /> : null;
  return (
    <AppBar position='static' color='transparent' className={classes.root}>
      <Container>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='logo'
            className={classes.title}
          >
            <img src={logo} alt='Logo' />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Grid container spacing={2}>
              <Grid item><Button color='inherit'>About Us</Button></Grid>
              <Grid item><Button color='inherit'>Stories</Button></Grid>
              <Grid item><Button color='inherit'>Contact</Button></Grid>
              <Grid item><Button color='inherit'>Log In</Button></Grid>
              <Grid item>
                <Button color='primary' variant='contained'>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </Container>
      {navDivider}
      <div className={classes.sectionDesktop}>
        <Container>
          <Toolbar>
            <Container>
              <Grid container direction='row' justify='space-evenly'>
                <Grid item>
                  <Button>Marketing</Button>
                </Grid>
                <Grid item>
                  <Button>Wholesale Center</Button>
                </Grid>
                <Grid item>
                  <Button>Seller Center</Button>
                </Grid>
                <Grid item>
                  <Button>Services</Button>
                </Grid>
                <Grid item>
                  <Button>Internships</Button>
                </Grid>
                <Grid item>
                  <Button>Events</Button>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}

export default Navigation;
