import { useMemo, useState } from "react";
// importando o tipo de array e dados que as diaristas precisam possuir
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidantionService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
   const [cep, setCep] = useState(""),
      cepValido = useMemo(() => {
         // basicamente useMemo é um listener que essa função vai ser acionada apenas quando o cep for modificado
         return ValidantionService.cep(cep);
      }, [cep]),
      [erro, setErro] = useState(""),
      [buscaFeita, setBuscaFeita] = useState(false),
      [carregando, setCarregando] = useState(false),
      // definindo que o array preisar der como(as) o array de UserShortInterface
      [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
      // exemplo, dê Ctrl+espaço para ver o autocomplete do que diaristas precisa ou tem.
      // diaristas[0].
      [diaristasRestantes, setDiaristasRestantes] = useState(0);

   async function buscarProfissionais(cep: string) {
      setBuscaFeita(false);
      setCarregando(true);
      setErro("");

      try {
         // a requisição retorna um objeto com os dados e no caso pegamos apenas os dados que são o que precisamos.
         // indicamos o que o servidor vai retornar para o vscode dentro de<{}>, avisando que vai retornar um objeto com o array de UserShortInterface(baseado nele quando criado)
         // e a quantidade de diaristas
         const { data } = await ApiService.get<{
            diaristas: UserShortInterface[];
            quantidade_diaristas: number;
         }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
         setDiaristas(data.diaristas);
         setDiaristasRestantes(data.quantidade_diaristas);
         setBuscaFeita(true);
         setCarregando(false);
      } catch (error) {
         setErro("Cep não encontrado");
         setCarregando(false);
      }
   }
   return {
      cep,
      setCep,
      cepValido,
      buscarProfissionais,
      erro,
      diaristas,
      buscaFeita,
      carregando,
      diaristasRestantes,
   };
}
