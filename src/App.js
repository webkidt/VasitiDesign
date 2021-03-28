// import { makeStyles} from '@material-ui/core/styles';

import Header from './components/Header/Header';
import SingleTestimonyHero from './components/SingleTestimonyHero/SingleTestimonyHero';

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
    <div>
      <Header/>
      <SingleTestimonyHero />
    </div>
  );
}

export default App;
