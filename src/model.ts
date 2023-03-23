export interface LocalPaymentMethod {
    label: string
    provider: string
    isDefaultMethod: boolean
}

export type RemotePaymentMethod = any

export interface DonationCheckboxProps {
    onChange: any
    checked: any
    content: any
}