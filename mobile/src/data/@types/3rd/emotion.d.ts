import AppTheme from "ui/themes/app-theme";

// criamos um tema baseado no tem que criamos.
type PaperThemeType = typeof AppTheme;

declare module "@emotion/react" {
   // e extendemos ele para o @emotion/react assim removendo erros de configurações criadas no AppTheme em cima do @emotion/react
   export interface Theme extends PaperThemeType {}
}
