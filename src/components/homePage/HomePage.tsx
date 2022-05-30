import { Container } from '@mui/material';
import { ProductList } from '../productList/ProductList';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <ProductList />
    </Container>
  );
}
