import { useState } from "react";
// importando o tipo de array e dados que as diaristas precisam possuir
import { UserShortInterface } from "data/@types/UserInterface";

export default function useIndex() {
   const [cep, setCep] = useState(""),
      [erro, setErro] = useState(""),
      [buscaFeita, setBuscaFeita] = useState(false),
      [carregando, setCarregando] = useState(false),
      // definindo que o array preisar der como(as) o array de UserShortInterface
      [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
      // exemplo, dê Ctrl+espaço para ver o autocomplete do que diaristas precisa ou tem.
      // diaristas[0].
      [diaristasRestantes, setDiaristasRestantes] = useState("");
   return { cep, setCep };
}
