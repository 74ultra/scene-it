import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen'
import MediaScreen from './screens/MediaScreen'
import LogInScreen from './screens/LogInScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavMediaScreen from './screens/FavMediaScreen';
import PubMediaScreen from './screens/publicCollections/PubMediaScreen'
import RegisterScreen from './screens/RegisterScreen';
import PublicColScreen from './screens/PublicColScreen';
import PubCollContainer from './screens/publicCollections/PubCollContainer';
import AboutScreen from './screens/AboutScreen';
import Confirm from './screens/Confirm';

import SearchState from './state/search/SearchState';
import UserState from './state/user/UserState';
import PublicState from './state/public/PublicState';
import MediaState from './state/media/MediaState';

import { ProtectedRoute } from './utils/ProtectedRoute';




function App() {
  return (
    <Router>
      <MediaState>
        <UserState>
          <SearchState>
            <PublicState>
              <Header />
              <main>
                <Route exact path='/' component={HomeScreen} />
                <Container style={{ padding: '80px 0 50px' }}>
                  <Route exact path='/login' component={LogInScreen} />
                  <Route exact path='/register' component={RegisterScreen} />
                  <Route exact path='/confirm' component={Confirm} />
                  <Route exact path='/about' component={AboutScreen} />
                  <Route exact path='/public' component={PublicColScreen} />
                  <Route exact path='/public/collections/:id' component={PubCollContainer} />
                  <Route exact path='/publicItem' component={PubMediaScreen} />
                  <Route exact path='/results' component={ResultsScreen} />
                  <Route exact path='/media/:id' component={MediaScreen} />
                  <ProtectedRoute exact path='/collections' component={CollectionsScreen} />
                  <ProtectedRoute exact path='/favorites' component={FavoritesScreen} />
                  <ProtectedRoute exact path='/favorites/:id' component={FavMediaScreen} />
                </Container>
              </main>
            </PublicState>
          </SearchState>
        </UserState>
      </MediaState>

    </Router>
  );
}

export default App;
