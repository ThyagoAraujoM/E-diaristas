import React from "react";
import {
   PageTitleContainer,
   PageTitleStyle,
   PageSubtitleStyled,
} from "./PageTitle.style";
// typescript, adicionando tipagem para o javascript
interface PageTitleProps {
   title: string;
   subTitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
   return (
      <PageTitleContainer>
         <PageTitleStyle>{props.title}</PageTitleStyle>
         <PageSubtitleStyled> {props.subTitle} </PageSubtitleStyled>
      </PageTitleContainer>
   );
};

export default PageTitle;
