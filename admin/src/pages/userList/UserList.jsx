import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import  './userList.scss'
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

const [data, setData] = useState(userRows);
const deleteUser = (id)=>{
  setData(data.filter(item=>item.id!==id));
}
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200,renderCell:(params)=>{
        return (
            <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImg" />
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      type: 'number',
      width: 160,
    },
    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:(params)=>(
        <>
          <Link to={`/user/${params.row.id}`}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete"  onClick={()=>deleteUser(params.row.id)} />
        </>
      )
    },
  ];
  
  
  
    return (
        <div className="userList">
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    )
}
