import React from 'react'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import "./Products.scss"

// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { productsData } from '../../data';


export default function Products() {
  const [products, setProducts] = useState(productsData)

  const deleteProduct = id => {
    const newProducts = products.filter(product => product.id !== id)
    setProducts(newProducts)
  }

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 80
    },
    {
      field: "productInformation",  // it's not exist in usersData
      headerName: "Product",
      width: 200,
      renderCell: params => (
        <Link to={`./${params.row.id}`}>
          <div className='product-information'>
            <img src={params.row.img} alt="product photo" className='product-information__img' />
            <span className='product-information__name'>{params.row.name}</span>
          </div>
        </Link>
      )
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => (
        <div className="product-actions">
          <Link to={`./${params.row.id}`}>
            <EditIcon className="product-actions__edit" />
          </Link>
          <DeleteIcon className='product-actions__delete' onClick={() => deleteProduct(params.row.id)} />
        </div>
      )
    }
  ]

  return (
    <div className='products-list'>
      <DataGrid
        rows={products}
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
        checkboxSelection
      />
    </div>
  )
}
