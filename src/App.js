// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header/Header';

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
}

export default App;
