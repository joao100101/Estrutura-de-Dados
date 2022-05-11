import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

var menu = new Vue({
  el: "#menu",
  data: {
    message: "Olá Mundo!",
    teste: "testando",
    data: new Date().toLocaleString(),
  },
});
const header = React.createElement("header", null,
  React.createElement("h1", null, "Mozilla Developer Network")
);