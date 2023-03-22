export interface LocalPaymentMethod {
    label: string
    provider: string
}

export interface RemotePaymentMethod {
    users: Array<any>
}