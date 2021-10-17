import { DefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

// reescrevendo e adicionando propriedades no tema do react-native. Passando o tema em si para dentro de AppTheme
//  e só reescrevendo o que precisa como as cores que passa tudo que tem em cores do react-native mas modifica só o que for preciso.
const AppTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      primary: "#6B2AEE",
      accent: "#02E7D9",
      text: "#707070",
      textSecondary: "#9B9B9B",
      backdrop: "rgba(107, 42, 238, .75)",
      background: "#fff",
      surface: "#fafafa",
      error: "#FC3C00",
      warning: "#FCA600",
      success: "#00D34D",
      grey: {
         50: "#FAFAFA",
         100: "#F0F0F0",
         200: "#D7D9DD",
         300: "#C4C4C4",
         400: "#9B9B9B",
      },
   },
   // criando mesmas propriedades e funções que tem no material-ui
   shape: {
      borderRadius: "3px",
   },
   spacing(size = 1): string {
      return size * 8 + "px";
   },
};

// em vez de reescrever tudo de novo já passamos as cores do AppTheme para se precisarmos modificar, modificamos em um só.
export const NavigationTheme = {
   ...NavigationDefaultTheme,
   colors: {
      ...NavigationDefaultTheme.colors,
      primary: AppTheme.colors.primary,
      background: AppTheme.colors.background,
      text: AppTheme.colors.text,
      card: AppTheme.colors.background,
      border: AppTheme.colors.grey[300],
   },
};

export default AppTheme;
