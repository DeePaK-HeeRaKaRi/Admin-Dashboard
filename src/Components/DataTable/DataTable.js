import React from 'react';
import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows,userColumns } from '../../Data/UserInformation';
import { Link,useLocation } from 'react-router-dom';
function DataTable() {
  const location = useLocation();
  console.log('location',location);
  const path = location.pathname;
  const actionColumn = [
    {
      field : 'action',
      headerName : 'Action',
      width : 200,
      renderCell : () => { 
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration : 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton'>Delete</div>
          </div>
        );
      }
    }
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        <Link to={path + '/new'} style={{ textDecoration : 'none' }} className='link'>
            Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
export default DataTable;
