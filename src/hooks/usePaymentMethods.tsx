import { useState, useEffect } from 'react';
import { LocalPaymentMethod, RemotePaymentMethod } from '../model';
import PaymentMethod from '../models/PaymentMethod';

const payInCash = new PaymentMethod("cash")

const convertPaymentMethods = (methods: RemotePaymentMethod) => {
    if (methods.users.length === 0) {
        return []
    }

    const extended = methods.users.map(
        (method: any) => new PaymentMethod(method.bank.cardType)
    )
    extended.push(payInCash)

    return extended
} 

const usePaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([])

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const url = "https://dummyjson.com/users"

            const response = await fetch(url)
            const methods: RemotePaymentMethod = await response.json()

            setPaymentMethods(convertPaymentMethods(methods))
        }

        fetchPaymentMethods()
    }, [])

    return {
        paymentMethods
    }
}

export default usePaymentMethods