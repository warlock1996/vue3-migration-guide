export default {
  install: (app, options) => {
    app.config.globalProperties.$t = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  },
};
