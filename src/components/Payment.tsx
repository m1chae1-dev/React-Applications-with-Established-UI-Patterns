import React, { useMemo, useState } from 'react';
import usePaymentMethods from '../hooks/usePaymentMethods';
import PaymentMethods from '../components/PaymentMethods'
import Products from './Products';

import "../styles/payment.css"

interface Props {
    amount: number
}

const Payment: React.FC<Props> = ({ amount }) => {
    const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false)
    const { paymentMethods } = usePaymentMethods()

    const { total, tip } = useMemo(() => ({
        total: agreeToDonate ? Math.floor(amount + 1) : amount,
        tip: parseFloat((Math.floor(amount + 1) -  amount).toPrecision(10)),
    }), [amount, agreeToDonate])

    const handleChange = (e: any) => {
        setAgreeToDonate(e.target)
    }

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
                <div>
                    <label>
                        <input 
                            type="checkbox"
                            onChange={handleChange}
                            checked={agreeToDonate}
                        />
                        <p>
                            {agreeToDonate
                                ? "Thanks for your donation."
                                : `I would like to donate $${tip} to charity.`}
                        </p>
                    </label>
                </div>
                <button className='payment_btn'>${total}</button>
            </div>
        </div>
    )
}
 
export default Payment