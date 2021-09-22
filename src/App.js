import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
// import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen'
import MediaScreen from './screens/MediaScreen'
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';

import SearchState from './state/search/SearchState';

function App() {
  return (
    <Router>
      <SearchState>
        <Header />
        <main>
          <Route exact path='/' component={HomeScreen} />
          <Container style={{ padding: '80px 0 50px' }}>
            <Route exact path='/login' component={LogInScreen} />
            <Route exact path='/register' component={RegisterScreen} />
            <Route exact path='/results' component={ResultsScreen} />
            <Route exact path='/media/:id' component={MediaScreen} />
          </Container>
          {/* <Footer /> */}
        </main>

      </SearchState>

    </Router>
  );
}

export default App;
