import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Container, Typography } from "@mui/material";
import {
   FormElementsContainer,
   ProfissionaisPaper,
   ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.pages";

const Home: NextPage = () => {
   // modo de chamar um state de outro arquivo
   const { cep, setCep } = useIndex();
   return (
      <div>
         <SafeEnvironment />
         <PageTitle
            title={"Sou eu bola de fogo"}
            subTitle={
               "Preencha seu endereço e veja todos os profissionais da sua localidade"
            }
         />
         <Container>
            <FormElementsContainer>
               <TextFieldMask
                  mask={"99.999-999"}
                  label={"Digite seu CPF"}
                  fullWidth
                  variant={"outlined"}
                  value={cep}
                  onChange={(event) => setCep(event.target.value)}
               />
               <Typography color={"error"}>CEP inválido</Typography>
               <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ width: "220px" }}>
                  Buscar
               </Button>
            </FormElementsContainer>
            <ProfissionaisPaper>
               <ProfissionaisContainer>
                  <UserInformation
                     name={"Thyago"}
                     picture={"https://github.com/ThyagoAraujoM.png"}
                     rating={3}
                     description={"testando o abacate"}
                  />
                  <UserInformation
                     name={"Thyago"}
                     picture={"https://github.com/ThyagoAraujoM.png"}
                     rating={3}
                     description={"testando o abacate"}
                  />
                  <UserInformation
                     name={"Thyago"}
                     picture={"https://github.com/ThyagoAraujoM.png"}
                     rating={3}
                     description={"testando o abacate"}
                  />
                  <UserInformation
                     name={"Thyago"}
                     picture={"https://github.com/ThyagoAraujoM.png"}
                     rating={3}
                     description={"testando o abacate"}
                  />
               </ProfissionaisContainer>
            </ProfissionaisPaper>
         </Container>
      </div>
   );
};

export default Home;
