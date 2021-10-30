import './listList.scss'
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../DummyData';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../../context/listContext/ListsContext';
import { getLists, deleteList } from '../../context/listContext/apiCalls';
import { DeleteOutline } from '@material-ui/icons';

export default function ListList() {
    const {lists,dispatch} = useContext(ListsContext);
    const deleteProduct = (id)=>{
        deleteList(id,dispatch)
    }
    useEffect(()=>{
      getLists(dispatch)
    },[dispatch])
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'title', headerName: 'Title', width: 250},
        { field: 'genre', headerName: 'Genre', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        {
          field:"action",
          headerName:"Action",
          width:150,
          renderCell:(params)=>(
            <>
              <Link to={{pathname:`/list/${params.row._id}`,list:params.row}}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=>deleteProduct(params.row._id)} />
            </>
          )
        },
      ];
      
    return (
        <div className="productList">
            <DataGrid
            rows={lists}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={r=>r._id}
            />
        </div>
    )
}
