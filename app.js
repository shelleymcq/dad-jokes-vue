const app = Vue.createApp({
  data() {
    return {
      joke: "What kind of table did the developer request? One with a Vue.",
      subtitle: "You think that was bad?",
    };
  },
  methods: {
    async getJoke() {
      const resp = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const joke = await resp.json();
      this.joke = joke.joke;
    },
  },
});

app.mount("#app");
