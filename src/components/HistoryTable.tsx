import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import moment from 'moment';


function DataTable({ data }) {
    
    const [pageSize, setPageSize] = React.useState<number>(5)
    
    const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 68 },
  { field: 'tourName', headerName: 'Tour', width: 250 },
  { field: 'adminName', headerName: 'Admin name', width: 250 },
  {
    field: 'time',
    headerName: 'Time',
    width: 250,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 250,
  },
];

    const rows = data.map(
        (record) => ({
            id: record.id,
            tourName: record.name,
            adminName: record.adminName,
            time: moment(record?.createdAt.toLocaleString()).format('DD-MM-YY hh:mm'),
            status: record.type === 1 ? 'Added' : record.type === 2 ? 'Deleted' : 'Edited'
        })
    );
            
  return (
    <div>
      <DataGrid
        className="history-table"
        rows={rows}
        columns={columns}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        autoHeight
        rowHeight={50}         
        rowsPerPageOptions={[5, 10, 15, 25]}
      />
    </div>
  );
}
export default DataTable;