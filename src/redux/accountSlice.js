import { createSlice } from "@reduxjs/toolkit"

const defaultUser = {
  acces: "",
  email: "",
  refresh: "",
  user_id: ""
}

// load from localStorage on init (client only)
let initialState = defaultUser
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("userDetails")
  if (stored) {
    initialState = JSON.parse(stored)
  }
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem("userDetails", JSON.stringify(action.payload))
      return action.payload
    },
    logoutUser: () => {
      localStorage.removeItem("userDetails")
      return defaultUser
    },
  },
})

export const { loginUser, logoutUser } = accountSlice.actions
export default accountSlice.reducer
