import { configureStore } from '@reduxjs/toolkit'
import displayStateReducer from './displayStateSlice'
// import ticketsReducer from './ticketsSlice'

export default configureStore({
  reducer: {
    display: displayStateReducer,
    // ticketStore: ticketsReducer
  }
})