import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
// import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen'
import MediaScreen from './screens/MediaScreen'
import LogInScreen from './screens/LogInScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavMediaScreen from './screens/FavMediaScreen';
import RegisterScreen from './screens/RegisterScreen';
import PublicColScreen from './screens/PublicColScreen';
import AboutScreen from './screens/AboutScreen';
import Confirm from './screens/Confirm';

import SearchState from './state/search/SearchState';
import UserState from './state/user/UserState';
import PublicState from './state/public/PublicState'

import { ProtectedRoute } from './utils/ProtectedRoute';
import PublicFavScreen from './screens/PublicFavScreen';




function App() {
  return (
    <Router>
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
                <Route exact path='/public/:id' component={PublicFavScreen} />
                <Route exact path='/results' component={ResultsScreen} />
                <Route exact path='/media/:id' component={MediaScreen} />
                <ProtectedRoute exact path='/collections' component={CollectionsScreen} />
                <ProtectedRoute exact path='/favorites' component={FavoritesScreen} />
                <ProtectedRoute exact path='/favorites/:id' component={FavMediaScreen} />

              </Container>
              {/* <Footer /> */}
            </main>
          </PublicState>

        </SearchState>
      </UserState>
    </Router>
  );
}

export default App;
