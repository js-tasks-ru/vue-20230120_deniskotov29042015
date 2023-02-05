import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      result: 0,
      firstInput: '',
      secondInput: '',
    };
  },
});

const app = createApp(App);

const vm = app.mount('#app');
