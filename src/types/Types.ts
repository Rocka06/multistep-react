export type Item = {
    name: string
    description: string
}

export type Store = {
    name: string,
    address: string
}

export type OrdererData = {
    name: string,
    email: string,
    mobile: string
}

export type DeliveryData = {
    address: string
}

export type PickupData = {
    store: Store
}

export type Order = {
    items: Item[],
    orderer: OrdererData,
    isPickup: boolean,
    deliveryData: DeliveryData,
    pickupData: PickupData
}