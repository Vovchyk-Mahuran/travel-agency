import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import App from '../containers/App';
import Tours from '../containers/Tours';
import TourDetails from '../containers/TourDetails';

import { FetchCountries, fetchTours, GetAllTours } from '../reducers/tourReducer';
import { fetchUsers, GetAllUsers } from '../reducers/usersReducer';

import Header from './Header';
import '../assets/styles/App.scss';
import '../assets/styles/header.scss';
import AdminPage from '../containers/AdminPage';
import { RootState } from '../store/store';
import EditTour from './EditTour';

import { GetAllHistory } from '../reducers/historyReducer';
import HistoryPage from '../containers/HistoryPage';


function Provider2() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.user.user?.isAdmin);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  useEffect(() => {
    // first loading of website to API
    dispatch(GetAllTours());// setTours(data);
    dispatch(GetAllUsers());
    dispatch(FetchCountries());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Header/>
        </div>
        <Routes>
          <Route
            path="/"
            element={(
              <App />
            )}
          />
          <Route
            // index
            path="/tours"
            element={(
              <Tours />
            )}
          />
          <Route
            // index
            path="/tours/:id"
            element={(
              <TourDetails/>
            )}
          />
          <Route
            // index
            path="/tours/:id/edit"
            element={isAuth && isAdmin ? <EditTour/> : <Navigate to='/' />}
          />
          <Route
            path="/admin"
            element={isAuth && isAdmin ? <AdminPage />: <Navigate to='/' />}
          />
          <Route
            path="/history"
            element={(
              <HistoryPage/>
            )}
          />
          <Route
            // index
            path="/contact"
            element={<div>3</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Provider2;
