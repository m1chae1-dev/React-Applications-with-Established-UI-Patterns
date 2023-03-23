import React from 'react'

const FormatDonationCheckbox = () => {
  const formatCheckboxLabel = (agreeToDonate: boolean, tip: number, countryCode: string) => {
    const currencySign = countryCode === "JP" ? "¥" : "$"

    return agreeToDonate
        ? "Thanks for your donation."
        : `I would like to donate ${currencySign}${tip} to charity.`
  }

  return {
    formatCheckboxLabel
  }
}

export default FormatDonationCheckbox