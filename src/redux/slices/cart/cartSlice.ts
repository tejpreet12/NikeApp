import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
    items: [] as Array<{product: any; quantity: number}>,
    deliveryFee: 15,
    freeDeliveryFrom: 200
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload;
            const existingItem = state.items.find((i) => i.product.id === newProduct.id);
            
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
            state.items.push({product:newProduct, quantity: 1})
            }
        },
        changeCartItemQuantity: (state, action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.items.find(item => item.product.id === productId);
            
            if (cartItem) {
                cartItem.quantity += amount;
            }

            if(cartItem && cartItem.quantity <= 0) {
                state.items = state.items.filter(item => item !== cartItem);
            }
        }
    }
})

export const {addCartItem, changeCartItemQuantity} = cartSlice.actions;
export const selectNumberOfItems = (state: RootState) => state.cart.items.length; //custom selector approach
export const selectSubTotal = (state : RootState) => state.cart.items.reduce((sum, item) => sum += item.product.price * item.quantity,0)
export const cartSelector = (state: RootState) => state.cart;
export const selectDeliveryFee =  createSelector(  // we can use multiple selectors in use Selector which depend on each other
    cartSelector,
    selectSubTotal,
    (cart , subTotal ) => (subTotal === 0 || subTotal > cart.freeDeliveryFrom) ? 0 : cart.deliveryFee // 1st argument is the result of cart Selector and 2nd argument is the result of selectSubTotal
)
export const selectTotal = createSelector(
    selectSubTotal,
    selectDeliveryFee,
    (subTotal, deliveryFee) => subTotal + deliveryFee
)
export default cartSlice.reducer;
