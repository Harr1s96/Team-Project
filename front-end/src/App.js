import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchPeople from './components/SearchPeople';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';
import PeopleResultsPage from './components/peopleResultsPage';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import CreateUser from './components/createUser';
import SearchVehicle from './components/searchVehicle';
import VehicleResultsPage from './components/vehicleResultsPage';

function App() {

  const requireLogin = (to, from, next) => {
    if (sessionStorage.getItem('jwt')) {
      next();
    }
    next.redirect('/user/signin');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path='/user/' component={NavBar}></Route>
        {/* <GuardProvider guards={[requireLogin]}> */}
          <Route path='/user/home/' component={SearchNavBar} />
          <Route path='/user/home/searchpeople' component={SearchPeople} />
          <Route path='/user/home/searchvehicle' component={SearchVehicle} />
          <Route path='/admin/' component={AdminNavBar} />
          <Route path='/user/home/peopleresults' component={PeopleResultsPage} />
          <Route path='/user/home/vehicleresults' component={VehicleResultsPage} />
        {/* </GuardProvider> */}
      <Route path='/user/signin' component={SignIn}></Route>
    </BrowserRouter>
    </Provider>
  );
}


export default App;