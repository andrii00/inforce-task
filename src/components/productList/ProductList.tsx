import { Box } from '@mui/material';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/ActionCreators';
import { ProductItem } from '../productItem/ProductItem';
import { StyledListDiv } from './styled.List';

export const ProductList: FC = () => {
  const { products, deleteModal } = useAppSelector(
    (state) => state.productReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [deleteModal]);

  return (
    <StyledListDiv>
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
    </StyledListDiv>
  );
};
