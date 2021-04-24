module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@routes": "./src/routes",
          "@modules": "./src/modules",
          "@providers": "./src/providers",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
