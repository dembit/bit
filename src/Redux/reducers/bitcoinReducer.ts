import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SubscriberType, Tiker } from '../../Types/Tipes'
import type { RootState } from '../redux'






interface list {
  userId: number,
  id: number,
  title: string,
  body:  string
}
// Define the initial state using that type
const initialState = {
  table: [] as Tiker[]
}

// Define a type for the slice state
export type BitcoinStateType = typeof initialState

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTikers: (state, action: PayloadAction<Tiker[]>) => {
      state.table = action.payload
    },
    setSingleCurrencies: (state, action: PayloadAction<{currency: SubscriberType, index: number}>) => {
      const {index, currency} = action.payload
      state.table[index] = {...state.table[index], ...currency}
    }
    
  },
  
})

export const { setTikers, setSingleCurrencies } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counterSlice.value

export default counterSlice.reducer