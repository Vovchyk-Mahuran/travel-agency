import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import App from '../containers/App';
import Tours from '../containers/Tours';
import TourDetails from '../containers/TourDetails';

import { fetchTours } from '../reducers/tourReducer';
import { fetchUsers } from '../reducers/usersReducer';

import Header from '../containers/Header';
import '../assets/styles/App.scss';
import '../assets/styles/header.scss';
import AdminPage from '../containers/AdminPage';
import { RootState } from '../store/store';
import EditTour from './EditTour';


function Provider2() {
  // const tours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);

  useEffect(() => {
    setTimeout(() => {
      // first loading of website to API
      dispatch(fetchTours());// setTours(data);
    }, 1000)
    dispatch(fetchUsers());
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
            element={isAdmin ? <EditTour/> : <Navigate to='/' />}
          />
          <Route
            path="/admin"
            element={isAdmin ? <AdminPage />: <Navigate to='/' />}
          />
          <Route
            // index
            path="/type"
            element={<div>2</div>}
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
