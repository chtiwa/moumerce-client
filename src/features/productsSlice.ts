import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../services/types/Product";

interface ProductsProps {
  title: string;
  // wishlist: any[]
  products?: TProduct[];
  showFilteredResults: boolean;
}

// all i need is the product's title so i can use it in BreadCrumps.tsx
const initialState: ProductsProps = {
  title: "",
  // wishlist: []
  products: [],
  showFilteredResults: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductTitle: (state, action) => {
      state.title = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.showFilteredResults = true;
    },
    hideFilteredResults: (state) => {
      state.showFilteredResults = false;
    },
  },
});

export const { setProductTitle, setProducts, hideFilteredResults } =
  productsSlice.actions;

export default productsSlice.reducer;
