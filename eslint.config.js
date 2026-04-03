export default [
  {
    ignores: ["public/js/md5.js"]
  },
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      semi: ["error", "always"]
    }
  }
];