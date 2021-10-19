import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import {
   InformationContainer,
   UserInformationContainer,
   UserName,
   UserDescription,
   RatingStyled,
} from "./UserInformation.style";

export interface UserInformationProps {
   picture: string;
   name: string;
   rating: number;
   description?: string;
   darker?: boolean;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
   return (
      // resolvido o problema de compatibilidade dentro do estilo do UserInformationContainer
      <UserInformationContainer darker={Boolean(props.darker)}>
         <Avatar.Image source={{ uri: props.picture }} />
         <InformationContainer>
            <UserName>props.name</UserName>
            <RatingStyled defaultRating={props.rating} />
            <UserDescription>props.description</UserDescription>
         </InformationContainer>
      </UserInformationContainer>
   );
};

export default UserInformation;
