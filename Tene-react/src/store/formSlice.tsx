// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit';


// export type CustomerInfoType ={
//   fullName: string
//   email: string
//   phone: string
// }

// export type MovingDetailsType ={
//   fromAddress: string
//   toAddress: string
//   fromFloor: number
//   toFloor: number
//   fromElevator: boolean
//   toElevator: boolean
//   moveDate: string
// }



// export type FormData = Partial<CustomerInfoType & MovingDetailsType >

// const initialState: FormData = {}

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     updateForm(state, action: PayloadAction<FormData>) {
//       Object.assign(state, action.payload)
//     },
//     resetForm() {
//       return {}
//     },
//   },
// })

// export const { updateForm, resetForm } = formSlice.actions
// export default formSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Basic types
export type CustomerInfoType = {
  fullName: string
  email: string
  phone: string
}

export type MovingDetailsType = {
  fromAddress: string
  toAddress: string
  fromFloor: number
  toFloor: number
  fromElevator: boolean
  toElevator: boolean
  moveDate: string
}

// Product and Category types
export type ProductSelection = {
  productId: string
  quantity: number
}

export type CategorySelection = {
  categoryId: string
  products: ProductSelection[]
}

// Full form data
export type FormData = Partial<
  CustomerInfoType &
  MovingDetailsType & {
    categories?: CategorySelection[]
  }
>

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
    setCategories(state, action: PayloadAction<CategorySelection[]>) {
      state.categories = action.payload
    },
    updateProduct(
      state,
      action: PayloadAction<{
        categoryId: string
        product: ProductSelection
      }>
    ) {
      if (!state.categories) state.categories = []

      const category = state.categories.find(c => c.categoryId === action.payload.categoryId)
      if (category) {
        const existingProduct = category.products.find(p => p.productId === action.payload.product.productId)
        if (existingProduct) {
          existingProduct.quantity = action.payload.product.quantity
        } else {
          category.products.push(action.payload.product)
        }
      } else {
        state.categories.push({
          categoryId: action.payload.categoryId,
          products: [action.payload.product],
        })
      }
    },
    removeProduct(
      state,
      action: PayloadAction<{ categoryId: string; productId: string }>
    ) {
      const category = state.categories?.find(c => c.categoryId === action.payload.categoryId)
      if (category) {
        category.products = category.products.filter(p => p.productId !== action.payload.productId)
      }
    },
  },
})

export const {
  updateForm,
  resetForm,
  setCategories,
  updateProduct,
  removeProduct,
} = formSlice.actions

export default formSlice.reducer
