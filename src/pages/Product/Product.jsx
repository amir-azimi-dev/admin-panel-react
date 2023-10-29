import React from 'react'
import "./Product.scss"

import { productsSalesData } from "../../data"

// components
import Chart from '../../components/Chart/Chart'
import { Button } from '@mui/material'

// icons
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
    return (
        <div className='product'>
            <div className="product__header">
                <h3 className="product__title">Product</h3>
                <Button className='product__button' variant="outlined" size='large'>Create</Button>
            </div>

            <div className='row'>
                <div className='product__chart'>
                    <Chart title="Sales / Month" data={productsSalesData} dataKey="sales" />
                </div>

                <div className="product__details">
                    <div className="product__details-wrapper">
                        <img src="/mac-book.webp" alt="laptop image" className="product__details-img" />
                        <span className="product__details-name">mac book</span>
                    </div>
                    <div className="product__details-wrapper2">
                        <div className="product__detail">
                            <span className="product__detail-key">ID:</span>
                            <span className="product__detail-value">132</span>
                        </div>
                        <div className="product__detail">
                            <span className="product__detail-key">Name:</span>
                            <span className="product__detail-value">mac book</span>
                        </div>
                        <div className="product__detail">
                            <span className="product__detail-key">Sales:</span>
                            <span className="product__detail-value">$213092</span>
                        </div>
                        <div className="product__detail">
                            <span className="product__detail-key">Active:</span>
                            <span className="product__detail-value">Yes</span>
                        </div>
                        <div className="product__detail">
                            <span className="product__detail-key">in Stock:</span>
                            <span className="product__detail-value">Yes</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='product__edit-form-container'>
                <h3>Edit Product</h3>
                <form className="product__edit-form">
                    <div>
                        <div className="form-group">
                            <label htmlFor="product-name" className="product__form-label">Product Name</label>
                            <input type="text" id="product-name" placeholder='mac book' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="in-stock" className="product__form-label">In Stock</label>
                            <select id="in-stock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="is-active" className="product__form-label">Active</label>
                            <select id="is-active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className='Product__img-uploader'>
                                <img src="/mac-book.webp" className='product__img-uploader-img' alt="product image" />

                                <label htmlFor="product-image-upload" className="product__form-label">
                                    <PublishIcon className='product__img-uploader-icon' />
                                </label>
                                <input type="file" id="product-image-upload" placeholder='mac book' className='Product__img-uploader-input' />
                            </div>
                        </div>
                    </div>

                    <Button className='product__button' variant="contained">Edit</Button>
                </form>
            </div>
        </div>
    )
}
