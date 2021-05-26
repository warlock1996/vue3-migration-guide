import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import i18n from "./plugins/i18n.js";
import plugin from "./plugins/plugin.js";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount("#app");

  app.use(plugin);
  app.use(i18n, {
    greetings: {
      hello: "Say Hello !",
      hi: {
        do: "something",
      },
    },
  });

app.config.globalProperties.$axios = axios;
