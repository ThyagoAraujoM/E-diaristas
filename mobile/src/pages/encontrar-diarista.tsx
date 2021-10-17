import React from "react";
import { Text, View } from "react-native";
import Button from "ui/components/inputs/Button/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "ui/router/Router";

type NavigationProp = StackNavigationProp<RootStackParamList, "Index">;

interface IndexProps {
   navigation: NavigationProp;
}

// navigation: propriedade com algumas funções, uma delas é navigate que vai jogar o usuário para outra tela desejada
const EncontrarDiarista: React.FC<IndexProps> = ({ navigation }) => {
   return (
      // flex:1 faz o conteúdo ocupar todo o espaço que ele tem.
      <View style={{ flex: 1, justifyContent: "center" }}>
         <Button
            mode={"contained"}
            onPress={() => navigation.navigate("EncontrarDiaristas")}>
            Encontrar Diarista
         </Button>
      </View>
   );
};

export default EncontrarDiarista;
