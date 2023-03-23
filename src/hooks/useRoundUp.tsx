import { useState, useMemo } from 'react';

const useRoundUp = (amount: number, countryCode: string) => {
    const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false)

    const { total, tip } = useMemo(() => ({
        total: agreeToDonate 
            ? countryCode === "JP"
                ? Math.floor(amount / 100 + 1) * 100
                : Math.floor(amount + 1) 
            : amount,
        tip: countryCode === "JP"
                ? parseFloat((Math.floor(amount / 100 + 1) * 100 - amount).toPrecision(10))
                : parseFloat((Math.floor(amount + 1) -  amount).toPrecision(10)) 


        // tip: parseFloat((Math.floor(amount + 1) -  amount).toPrecision(10)),
    }), [amount, agreeToDonate, countryCode])

    const updateAgreeToDonate = () => {
        setAgreeToDonate((agreeToDonate) => !agreeToDonate)
    }

    return {
        total,
        tip,
        agreeToDonate,
        updateAgreeToDonate
    }
}

export default useRoundUp