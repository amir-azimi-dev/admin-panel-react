import React from 'react'
import "./Product.scss"
import { Button } from '@mui/material'

import {productsSalesData} from "../../data"

// components
import Chart from '../../components/Chart/Chart'

export default function Product() {
    return (
        <div className='product'>
            <div className="product__header">
                <h3 className="product__title">Product</h3>
                <Button className='product__button' variant="outlined" size='large'>Create</Button>
            </div>

            <div>
                <Chart title="Sales / Month" data={productsSalesData} dataKey="sales"/>
            </div>
        </div>
    )
}
