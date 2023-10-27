import React from 'react'
import "./RecentTransactions.scss"
import { transactionsData } from '../../data'

export default function RecentTransactions() {
    const Button = ({ type }) => (
        <button className={`recent-transaction__button${" " + type}`}>{type}</button>
    )

    return (
        <div className='recent-transactions'>
            <h3 className='recent-transactions__title'>Latest Transactions</h3>
            <table className="recent-transactions__table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsData.map(transaction => (
                        <tr key={transaction.id} className='recent-transaction'>
                            <td className='recent-transaction__customer'>
                                <img src={transaction.customer.img} alt="customer-photo" className="recent-transaction__img" /><span className="recent-transaction__name">{transaction.customer.name}</span>
                            </td>
                            <td className="recent-transaction__data">{transaction.date}</td>
                            <td className="recent-transaction__amount">{transaction.amount}</td>
                            <td className="recent-transaction__status">
                                <Button type={transaction.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
