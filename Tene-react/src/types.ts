// types.ts
export type CustomerInfo = {
  fullName: string
  email: string
  phone: string
}

export type MovingInfo = {
  fromAddress: string
  toAddress: string
  fromFloor: number
  toFloor: number
  fromElevator: boolean
  toElevator: boolean
  moveDate: Date
}


export type FormData = CustomerInfo & MovingInfo
