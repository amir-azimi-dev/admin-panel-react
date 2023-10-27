import React from 'react'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import "./UsersList.scss"

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { usersData } from '../../data';


export default function UserList() {

  const [users, setUsers] = useState(usersData)

  const deleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 80
    },
    {
      field: "userInformation",  // it's not exist in usersData
      headerName: "User",
      width: 200,
      renderCell: params => (
        <Link to={`./${params.row.id}`}>
          <div className='user-information'>
            <img src={params.row.img} alt="user profile photo" className='user-information__img' />
            <span className='user-information__name'>{params.row.name}</span>
          </div>
        </Link>
      )
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => (
        <div className="user-actions">
          <Link to={`./${params.row.id}`}>
            <EditIcon className="user-actions__edit" />
          </Link>
          <DeleteIcon className='user-actions__delete' onClick={() => deleteUser(params.row.id)} />
        </div>
      )
    }
  ]

  return (
    <div className='users-list'>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
      />
    </div>
  )
}
