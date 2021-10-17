import React from "react";
import TextField from "ui/components/inputs/TextField/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

// estendendo as propriedades de OutlinedTextFieldProps para que as propriedades passadas no index que são do OutlinedTextFieldProps sejam validadas
export interface TextFieldMaskProps extends OutlinedTextFieldProps {
   mask: string;
   value: string;
}

// Passando as propriedades de estilos passadas no index para dentro do TextField para mudar algumas estilizações
const TextFieldMask: React.FC<TextFieldMaskProps> = ({
   mask,
   value,
   onChange,
   ...props
}) => {
   return (
      <InputMask mask={mask} value={value} onChange={onChange}>
         {() => {
            return <TextField {...props} />;
         }}
      </InputMask>
   );
};

export default TextFieldMask;
