import React from 'react'
import "./Features.scss"

// icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
    return (
        <div className="features-container">
            <div className='feature'>
                <h4 className='feature__title'>Revenue</h4>
                <div className="feature__pricing-container">
                    <span className="feature__price">$2,415</span>
                    <span className="feature__changes">
                        <span>-11.4</span>
                        <ArrowDownwardIcon className='feature__icon negative' />
                    </span>
                </div>
                <p className='feature__caption'>Compare to last month</p>
            </div>
            
            <div className='feature'>
                <h4 className='feature__title'>Sales</h4>
                <div className="feature__pricing-container">
                    <span className="feature__price">$4,415</span>
                    <span className="feature__changes">
                        <span>-1.4</span>
                        <ArrowDownwardIcon className='feature__icon negative' />
                    </span>
                </div>
                <p className='feature__caption'>Compare to last month</p>
            </div>

            <div className='feature'>
                <h4 className='feature__title'>Costs</h4>
                <div className="feature__pricing-container">
                    <span className="feature__price">$2,225</span>
                    <span className="feature__changes">
                        <span>-2.4</span>
                        <ArrowUpwardIcon className='feature__icon positive' />
                    </span>
                </div>
                <p className='feature__caption'>Compare to last month</p>
            </div>

        </div>
    )
}
