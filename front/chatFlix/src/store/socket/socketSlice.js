import { createSlice } from '@reduxjs/toolkit';
export const socketSlice = createSlice({
   name: 'generalSocket',
   initialState: {
       socketStatus : 'disconnected',
       socketConnected: false
   },
   reducers: {
       onConnect: (state, {payload} ) => {
            console.log("\nPayload es: ", payload);
            state.socketStatus = payload.status;
            state.socketConnected = payload.socketConnected;
       },

       onDisconnect: (state) => {
            state.socketStatus = 'disconnected';
            state.socketConnected = false;
       }
   }
});


// Action creators are generated for each case reducer function
export const { onConnect, onDisconnect } = socketSlice.actions;