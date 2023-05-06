const app = Vue.createApp({
  data() {
    return {
      joke: "What kind of table did the developer request? One with a Vue.",
      subtitle: "You think that was bad?",
    };
  },
});

app.mount("#app");
