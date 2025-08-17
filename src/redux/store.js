import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./accountSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
  reducer: {
    account: accountReducer,
    cart:cartReducer,
  },
})

store.subscribe(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartState", JSON.stringify(store.getState().cart))
  }
})

export default store
