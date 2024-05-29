export type EarthAddress = {
  type: 'terra'
  name: string
  phoneNumber: string
  country: string
  description: string
  state: string
  city: string
  zipCode: string
}

export type MarsAddress = {
  type: 'marte'
  name: string
  phoneNumber: string
  lote: string
}

export type Address = EarthAddress | MarsAddress
