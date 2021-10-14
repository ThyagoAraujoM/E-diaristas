import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
export const FooterStyled = styled("footer")`
   background-color: ${({ theme }) => theme.palette.primary.main};
   color: ${({ theme }) => theme.palette.primary.contrastText};
   padding: ${({ theme }) => theme.spacing(4)} 0;
   margin-top: auto;
`;

// Passando a estilização e configuração do Container para um style e depois passando como container do footer
export const FooterContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   gap: ${({ theme }) => theme.spacing(2)};
   flex-wrap: wrap;

   ${({ theme }) => theme.breakpoints.down("md")} {
      gap: ${({ theme }) => theme.spacing(5)};
   }
`;

export const FooterTitle = styled((props) => (
   // basicamente passamos aqui em vez de styled(Typography) para não precisar repetir component e variant
   // props é o texto passado dentro de FooterTitle que precisa ser passado para dentro de Typography como filho para ser renderizado na tela
   <Typography component={"h2"} variant={"body2"} {...props} />
))`
   font-weight: bold;
`;

export const AppList = styled("ul")`
   list-style-type: none;
   padding: 0;
   display: flex;
   gap: ${({ theme }) => theme.spacing()};

   img {
      width: 122px;
   }
`;
