import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldStyled = styled(TextField)`
   /* modificando o estilo na raiz do TextField */
   .MuiInputBase-root {
      background-color: ${({ theme }) => theme.palette.grey[50]};
   }
   /* classe da borda do input */
   .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.grey[100]};
   }
`;
