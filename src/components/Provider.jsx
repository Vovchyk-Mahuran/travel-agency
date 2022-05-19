import { React, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import Tours from './Tours';
import TourDetails from './TourDetails';

import { fetchTours } from '../reducers/tourReducer';
import { fetchUsers } from '../reducers/usersReducer';

function Provider2() {
  const tours = useSelector((state) => state.tour.tours);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // при першій загрузці сайту to API
    dispatch(fetchTours());// setTours(data);
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <App />
          )}
        />
        <Route
          index
          path="/tours"
          element={(
            <Tours />
          )}
        />
        <Route
          index
          path="/tours/:id"
          element={(
            <TourDetails tours={tours} />
          )}
        />
        <Route index path="/type" element={<div>2</div>} />
        <Route index path="/contact" element={<div>3</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Provider2;
