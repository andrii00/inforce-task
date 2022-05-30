import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addProductModal } from '../../store/reducers/ProductSlice';
import { style, StyledDiv, TextFieldStyled } from './style';
import { addProductAction } from '../../store/reducers/ActionCreators';

export default function AddModal() {
  const dispatch = useAppDispatch();
  const { addModal } = useAppSelector((state) => state.productReducer);
  const [url, setUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleClose = () => dispatch(addProductModal(false));
  const handleSubmit = () => {
    if (!url || !name || !count || !weight) return;
    dispatch(addProductAction(url, name, count, weight));
    dispatch(addProductModal(false));
  };
  return (
    <div>
      <Modal
        open={addModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextFieldStyled
            label="Image Url"
            type="text"
            onChange={({ target: { value } }) => setUrl(value)}
          />
          <br />
          <TextFieldStyled
            label="Product Name"
            type="text"
            onChange={({ target: { value } }) => setName(value)}
          />
          <br />
          <TextFieldStyled
            label="Count"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={({ target: { value } }) => setCount(Number(value))}
          />
          <br />
          <TextFieldStyled
            label="Weight"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={({ target: { value } }) => setWeight(Number(value))}
          />

          <StyledDiv>
            <Button onClick={handleClose} variant="outlined" color="error">
              Close
            </Button>
            <Button
              disabled={!url || !name || !count || !weight}
              variant="outlined"
              color="success"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Add
            </Button>
          </StyledDiv>
        </Box>
      </Modal>
    </div>
  );
}
