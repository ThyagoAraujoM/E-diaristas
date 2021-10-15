import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import {
   FormElementsContainer,
   ProfissionaisPaper,
   ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.pages";

const Home: NextPage = () => {
   // modo de chamar um state de outro arquivo
   const {
      cep,
      setCep,
      cepValido,
      buscarProfissionais,
      erro,
      diaristas,
      buscaFeita,
      carregando,
      diaristasRestantes,
   } = useIndex();
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
               {erro && <Typography color={"error"}>{erro}</Typography>}
               <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ width: "220px" }}
                  disabled={!cepValido || carregando}
                  onClick={() => buscarProfissionais(cep)}>
                  {carregando ? <CircularProgress size={20} /> : "Buscar"}
               </Button>
            </FormElementsContainer>
            {buscaFeita &&
               (diaristas.length > 0 ? (
                  <ProfissionaisPaper>
                     <ProfissionaisContainer>
                        {diaristas.map((item, index) => {
                           return (
                              <UserInformation
                                 key={index}
                                 name={item.nome_completo}
                                 picture={item.foto_usuario}
                                 rating={item.reputação}
                                 description={item.cidade}
                              />
                           );
                        })}
                     </ProfissionaisContainer>

                     <Container sx={{ textAlign: "center", mt: 5 }}>
                        {diaristasRestantes > 0 && (
                           <Typography>
                              ...e mais {diaristasRestantes}{" "}
                              {diaristasRestantes > 1
                                 ? "profissionais atendem"
                                 : "profissional atende"}
                              ao seu endereço.
                           </Typography>
                        )}

                        <Button
                           variant={"contained"}
                           color={"secondary"}
                           sx={{ mt: 5 }}>
                           Contratar um profissional
                        </Button>
                     </Container>
                  </ProfissionaisPaper>
               ) : (
                  <Typography align={"center"} color={"textPrimary"}>
                     Ainda não temos nenhuma diarista disponível na sua região
                  </Typography>
               ))}
            ;
         </Container>
      </div>
   );
};

export default Home;
