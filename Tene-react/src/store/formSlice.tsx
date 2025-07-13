import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';


export type CustomerInfoType ={
  fullName: string
  email: string
  phone: string
}

export type MovingDetailsType ={
  fromAddress: string
  toAddress: string
  fromFloor: number
  toFloor: number
  fromElevator: boolean
  toElevator: boolean
  moveDate: string
}



export type FormData = Partial<CustomerInfoType & MovingDetailsType >

const initialState: FormData = {}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<FormData>) {
      Object.assign(state, action.payload)
    },
    resetForm() {
      return {}
    },
  },
})

export const { updateForm, resetForm } = formSlice.actions
export default formSlice.reducer
