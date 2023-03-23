import React from 'react';
import usePaymentMethods from '../hooks/usePaymentMethods';
import PaymentMethods from '../components/PaymentMethods'
import Products from './Products';

import "../styles/payment.css"

interface Props {
    amount: number
}

const Payment: React.FC<Props> = ({ amount }) => {
    const { paymentMethods } = usePaymentMethods()

    return (
        <div>
            <div className='payment_product_container'>
                <h3>Order Details</h3>
                <div>
                    <Products />
                </div>
            </div>
            <div className='payment_container'>
                <h3>Payment</h3>
                <div className='payment_types'>
                    <PaymentMethods paymentMethods={paymentMethods} />
                </div>
                <hr />
                <button className='payment_btn'>${amount}</button>
            </div>
        </div>
    )
}
 
export default Payment