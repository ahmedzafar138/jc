// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// interface CartState {
//   items: CartItem[];
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<CartItem>) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);

//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }

//       state.totalAmount += action.payload.price * action.payload.quantity;
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload);

//       if (itemIndex > -1) {
//         const item = state.items[itemIndex];
//         state.totalAmount -= item.price * item.quantity;
//         state.items.splice(itemIndex, 1);
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalAmount = 0;
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
