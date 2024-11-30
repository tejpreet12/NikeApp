import { createSlice } from "@reduxjs/toolkit";
import products from "../../../data/products";

const initialState = {
    products:products,
    selectedProduct:null as null | typeof products[0]
};

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setSelectedProduct: (state,action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find((product) =>  product.id === productId) || null;
        },
        
    }
});

export const { setSelectedProduct } = productSlice.actions;