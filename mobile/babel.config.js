// config para o babel
module.exports = function (api) {
   api.cache(true);
   return {
      presets: ["babel-preset-expo"],

      plugins: [
         [
            "module-resolver",
            {
               alias: {
                  data: "./src/data",
                  ui: "./src/ui",
                  pages: "./src/pages",
                  "@assets": "./assets",
                  "@styles": "./src/ui/styles",
               },
            },
         ],
         ["react-native-paper/babel"],
      ],
   };
};

// module-resolve para saber como vai resolver os caminos que vai acessar
// basicamente passando os mesmo paths do tsconfig
