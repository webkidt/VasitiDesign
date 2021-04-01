import { ThemeProvider} from '@material-ui/core/styles';

import Header from './components/Header/Header';
import SingleCustomerHero from './components/SingleCustomerHero/SingleCustomerHero';
import Stories from './components/Stories/Stories';
import theme from './theme/theme';

// const useStyles = makeStyles(theme => ({
//   root: {
//     elements: {
//       margin: '0',
//       padding: '0'
//     }
//   }
// }));

function App() {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <SingleCustomerHero vendor />
      {/* <Stories /> */}
    </ThemeProvider>
  );
}

export default App;
