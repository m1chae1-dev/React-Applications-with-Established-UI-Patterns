import { LocalPaymentMethod } from '../model';

const PaymentMethods = ({paymentMethods}: {paymentMethods :LocalPaymentMethod[]}) => (
    <>
        {paymentMethods.slice(28,31).map((method) => (
            <label key={method.provider}>
                <input
                    type="radio"
                    name="payment"
                    value={method.provider}
                    defaultChecked={method.isDefaultMethod}
                />
                <span>{method.label}</span>
            </label>
        ))}
    </>
)

export default PaymentMethods