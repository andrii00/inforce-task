import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSingleProduct } from '../../store/reducers/ActionCreators';

export const FullItem: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleProduct } = useAppSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  return (
    <Container sx={{ marginTop: '10px' }}>
      <Card sx={{ width: '70vw', margin: '10px 0 0 10px' }}>
        <CardMedia
          component="img"
          height="140"
          src={singleProduct.url}
          alt={singleProduct.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleProduct.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Count - {singleProduct.count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight - {singleProduct.weight}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
