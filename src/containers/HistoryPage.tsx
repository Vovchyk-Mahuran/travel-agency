import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import '../assets/styles/App.scss'

import { GetAllHistory } from '../reducers/historyReducer';
import DataTable from '../components/HistoryTable';

function HistoryPage() {
    const dispatch = useDispatch();
    const history = useSelector((state: RootState) => state.history.history)
 
  useEffect(() => {
      dispatch(GetAllHistory());
  }, []);


  return (
      <div className="content">
          <DataTable data={history} />
     </div>
  );
}
export default HistoryPage;
