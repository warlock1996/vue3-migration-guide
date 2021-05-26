import { h, Plugin, render } from "vue";
import Alert from "@/components/Alert.vue";

const plugin = {
  // eslint-disable-next-line
  install(app, options) {
    const toast = {
      show(message) {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const toastVNode = h(Alert, { message: message }, null);

        render(toastVNode, container);

        setTimeout(function() {
          render(null, container);
          document.body.removeChild(container);
          console.log(toastVNode);
        }, 2500);
      },
    };

    app.provide("$Toast", toast);
  },
};

export default plugin;
