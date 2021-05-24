import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { h } from "vue";

import i18n from "./plugins/i18n.js";

const app = createApp({
  render(h) {
    return <h1>Hi</h1>;
  },
});
app
  .use(store)
  .use(router)
  .mount("#app");

// app.use(i18n, {
//   greetings: {
//     hello: "Say Hello !",
//     hi: {
//       do: "something",
//     },
//   },
// });

// app.config.globalProperties.$axios = axios;
