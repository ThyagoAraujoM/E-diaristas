export const ValidantionService = {
   // verificação com expressão regular que retorna true or false se o cep tem o tamanho definido
   cep(cep = ""): boolean {
      return cep.replace(/\D/g, "").length === 8;
   },
};
