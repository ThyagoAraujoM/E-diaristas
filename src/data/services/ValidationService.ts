export const ValidantionService = {
   cep(cep = ""): boolean {
      return cep.replace(/\D/g, "").length === 8;
   },
};
