import { createApp, h } from 'vue';
//import App from './App.vue'
createApp({
  data() {
    return {
      message: 'Hello Vue Js:',
    };
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
  },
  render() {
    return h('div', [
      h('p', this.message),
      h('button', { onclick: this.reverse }, 'Reverse'),
    ]);
  },
}).mount('#app');

// createApp(App).mount('#app')
