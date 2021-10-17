import React from "react";
// Toda as telas vão ser declaradas dentro do NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationTheme } from "ui/themes/app-theme";
// As duas telas criadas
import Index from "pages";
import EncontrarDiarista from "pages";
// tem que ser declarado como modulo ná pasta @types para remover o erro. Typescript intende isso como módulo mas n reconhece basicamente
import Logo from "@assets/img/logos/e-diaristas-logo.png";
// basicamente para o react criar poder criar imagens
import { Image } from "react-native";

const Stack = createStackNavigator();

export type RootStackParamList = {
   Index: undefined;
   EncontrarDiaristas: undefined;
};

const Router: React.FC = () => {
   return (
      <NavigationContainer theme={NavigationTheme}>
         <Stack.Navigator>
            {/* Sempre a primeira tela passada abaixo vai ser a Tela renderizada ao abrir a aplicação  */}
            <Stack.Screen
               name={"Index"}
               component={Index}
               options={{
                  headerTitleAlign: "center",
                  headerTitle: () => (
                     <Image
                        style={{
                           width: 150,
                           height: 50,
                           resizeMode: "contain",
                        }}
                        source={Logo}
                     />
                  ),
               }}
            />
            <Stack.Screen
               name={"EncontrarDiaristas"}
               component={EncontrarDiarista}
               options={{ title: "Encontrar Diaristas" }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Router;
