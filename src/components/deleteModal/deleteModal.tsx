import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { style, StyledDiv } from './style';
import { deleteProductModal } from '../../store/reducers/ProductSlice';
import { deleteProduct } from '../../store/reducers/ActionCreators';

export default function DeleteModal() {
  const dispatch = useAppDispatch();
  const { deleteModal, productId } = useAppSelector(
    (state) => state.productReducer
  );

  const handleClose = () => dispatch(deleteProductModal(false));
  const handleSubmit = () => {
    dispatch(deleteProductModal(false));
    dispatch(deleteProduct(productId));
  };
  return (
    <div>
      <Modal
        open={deleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            Delete product?
          </Typography>
          <StyledDiv>
            <Button onClick={handleClose} variant="outlined" color="success">
              Close
            </Button>
            <Button onClick={handleSubmit} variant="outlined" color="error">
              Delete
            </Button>
          </StyledDiv>
        </Box>
      </Modal>
    </div>
  );
}
