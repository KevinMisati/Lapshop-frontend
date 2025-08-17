// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit"

// Load cart from localStorage if available
const savedCart = typeof window !== "undefined" ? localStorage.getItem("cartState") : null

const defaultCartState = {
number_of_items: 0,
products_in_cart: [],
sub_total: 0,
user: {
    uid: "",
    isLoggedIn: false,
},
}

const initialState = savedCart ? JSON.parse(savedCart) : defaultCartState

const cartSlice = createSlice({
name: "cart",
initialState,
reducers: {
    add_to_cart: (state, action) => {
        const product = action.payload
        const exists = state.products_in_cart.find((p) => p.id === product.id)

        if (!exists) {
            state.products_in_cart.unshift({ ...product, quantity: 1 })
            state.number_of_items += 1
            state.sub_total += Number(product.price)
        }
    },
    increase_quantity: (state, action) => {
        const { id, quantity } = action.payload
        const index = state.products_in_cart.findIndex((p) => p.id === id)
        if (index !== -1) {
            state.products_in_cart[index].quantity = quantity
        }
    },
    increase_sub_total: (state, action) => {
        state.sub_total += Number(action.payload)
    },
    decrease_sub_total: (state, action) => {
        state.sub_total -= Number(action.payload)
    },
    remove_product_from_cart: (state, action) => {
        const { id, price, quantity } = action.payload
        state.products_in_cart = state.products_in_cart.filter((p) => p.id !== id)
        state.sub_total -= price * quantity
        state.number_of_items -= 1
    },
    resetCart: () => defaultCartState,
},
})

export const {
    logInUser,
    logOutUser,
    add_to_cart,
    increase_quantity,
    increase_sub_total,
    decrease_sub_total,
    remove_product_from_cart,
    resetCart,
} = cartSlice.actions

export default cartSlice.reducer
