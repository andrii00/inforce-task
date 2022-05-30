import { styled, TextField } from '@mui/material';
export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30wv',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TextFieldStyled = styled(TextField)({
  width: '300px',
  marginTop: '10px',
});
export const StyledDiv = styled('div')({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-around',
});
