import axios from 'axios';
import { IProduct } from '../../models/IProduct';
import { AppDispatch } from '../store';
import { addProduct, getProductList, getSingleProduct } from './ProductSlice';

export const addProductAction =
  (url: string, name: string, count: number, weight: number) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IProduct>(
        'http://localhost:4000/products',
        {
          url: url,
          name: name,
          count: count,
          weight: weight,
          comments: [],
        }
      );
      const data = await response.data;
      dispatch(addProduct(data));
    } catch (e) {
      console.log(e);
    }
  };
export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IProduct[]>(
      'http://localhost:4000/products'
    );
    dispatch(getProductList(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchSingleProduct =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IProduct>(
        `http://localhost:4000/products/${id}`
      );
      dispatch(getSingleProduct(response.data));
    } catch (e) {
      console.log(e);
    }
  };

export const deleteProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete<IProduct>(`http://localhost:4000/products/${id}`);
  } catch (e) {
    console.log(e);
  }
};
