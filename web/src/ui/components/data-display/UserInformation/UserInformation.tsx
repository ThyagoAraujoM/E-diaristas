import { Container, Toolbar } from "@mui/material";
import React from "react";
import {
   UserInformationContainer,
   UserName,
   UserDescription,
   AvatarStyled,
   RatingStyled,
} from "./UserInformation.style";

// Decidindo oq o props precisa ou talvez precise ter quando colocado para renderizar
interface UserInformationProps {
   picture: string;
   name: string;
   rating: number;
   description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
   return (
      <Toolbar component={Container}>
         <UserInformationContainer>
            {/* se o usuário não tiver foto, vai pegar a primeira leta do nome e utilizar como imagem */}
            <AvatarStyled src={props.picture}>{props.name[0]} </AvatarStyled>
            <UserName>{props.name}</UserName>
            <RatingStyled readOnly value={props.rating} />
            <UserDescription>{props.description}</UserDescription>
         </UserInformationContainer>
      </Toolbar>
   );
};

export default UserInformation;
