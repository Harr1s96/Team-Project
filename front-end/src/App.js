import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchPeople from './components/SearchPeople';
import NavBar from './components/navBar';
import AdminNavBar from './components/adminNavBar';
import SearchNavBar from './components/searchNavBar';
import PeopleResultsPage from './components/peopleResultsPage';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Route path='/user/' component={NavBar}></Route>
      <Route path='/user/home/' component={SearchNavBar}></Route>
      <Route path='/user/home/searchpeople' component={SearchPeople}></Route>
      <Route path='/admin/' component={AdminNavBar}></Route>
      <Route path='/user/home/peopleresults' component={PeopleResultsPage}></Route>
      <Route path='/user/home/signin' component={SignIn}></Route>
    </BrowserRouter>
  );
}

export default App;
