import React, { useMemo, useState } from 'react';
import usePaymentMethods from '../hooks/usePaymentMethods';
import useRoundUp from '../hooks/useRoundUp';
import PaymentMethods from '../components/PaymentMethods'
import FormatDonationCheckbox from './FormatDonationCheckbox';
import DonationCheckbox from './DonationCheckbox';
import Products from './Products';

import "../styles/payment.css"

interface Props {
    amount: number
}

const Payment: React.FC<Props> = ({ amount }) => {
    const { paymentMethods } = usePaymentMethods()
    const { formatCheckboxLabel } = FormatDonationCheckbox()

    const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount)

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
                        <DonationCheckbox 
                            onChange={updateAgreeToDonate}
                            checked={agreeToDonate}
                            content={formatCheckboxLabel(agreeToDonate, tip)}
                        />
                    </label>
                </div>
                <button className='payment_btn'>${total}</button>
            </div>
        </div>
    )
}
 
export default Payment