import * as React from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../hooks/redux';
import { addProductModal } from '../../store/reducers/ProductSlice';
export default function Header() {
  const dispatch = useAppDispatch();

  const handleOpen = () => dispatch(addProductModal(true));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={handleOpen}
            startIcon={<AddIcon fontSize="large" />}
            color="inherit"
          >
            Add Product
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
