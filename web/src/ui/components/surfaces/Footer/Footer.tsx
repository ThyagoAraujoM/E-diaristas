import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import {
   FooterStyled,
   FooterContainer,
   FooterTitle,
   AppList,
} from "./Footer.style";

const Footer = () => {
   return (
      <FooterStyled>
         <FooterContainer>
            <Box sx={{ maxWidth: "400px" }}>
               <FooterTitle>Quem somos</FooterTitle>
               <Typography variant={"body2"} sx={{ mt: "16px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  excepturi, neque, quos saepe cum consectetur officia aperiam
                  adipisci voluptatem soluta molestiae doloribus voluptate
                  repellat quisquam labore, esse eveniet? Labore, sit.
               </Typography>
            </Box>
            <div>
               <FooterTitle>Baixe nossos aplicativos</FooterTitle>
               <AppList>
                  <li>
                     <a
                        href={"/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}>
                        <img
                           src={"/img/logos/app-store.png"}
                           alt={"AppStore"}
                        />
                     </a>
                  </li>
                  <li>
                     <a
                        href={"/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}>
                        <img
                           src={"/img/logos/app-store.png"}
                           alt={"AppStore"}
                        />
                     </a>
                  </li>
               </AppList>
            </div>
         </FooterContainer>
      </FooterStyled>
   );
};

export default Footer;
