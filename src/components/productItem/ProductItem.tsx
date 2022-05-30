import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import {
  deleteProductID,
  deleteProductModal,
} from '../../store/reducers/ProductSlice';

interface IItemProp {
  item: IProduct;
}

export const ProductItem: FC<IItemProp> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(deleteProductID(item.id));
    dispatch(deleteProductModal(true));
  };

  return (
    <>
      <Card sx={{ width: '23vw', margin: '10px 0 0 10px' }}>
        <CardMedia
          component="img"
          height="140"
          src={item.url}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Count - {item.count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight - {item.weight}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>Delete</Button>
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/full-item/${item.id}`}
          >
            <Button>Learn More</Button>
          </NavLink>
        </CardActions>
      </Card>
    </>
  );
};
