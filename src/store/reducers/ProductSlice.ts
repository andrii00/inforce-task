import { IProduct } from '../../models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IProductState {
  products: IProduct[];
  addModal: boolean;
  deleteModal: boolean;
  productId: string;
  singleProduct: IProduct;
}

const initialState: IProductState = {
  products: [],
  addModal: false,
  deleteModal: false,
  productId: '',
  singleProduct: {
    id: 'string',
    url: 'string',
    name: 'string',
    count: 0,
    weight: 0,
    comments: [],
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addProductModal(state, action: PayloadAction<boolean>) {
      state.addModal = action.payload;
    },
    getProductList(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    getSingleProduct(state, action: PayloadAction<IProduct>) {
      state.singleProduct = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    deleteProductModal(state, action: PayloadAction<boolean>) {
      state.deleteModal = action.payload;
    },
    deleteProductID(state, action: PayloadAction<string>) {
      state.productId = action.payload;
    },
  },
});
export const {
  addProductModal,
  addProduct,
  getProductList,
  deleteProductModal,
  deleteProductID,
  getSingleProduct,
} = productSlice.actions;

export default productSlice.reducer;
