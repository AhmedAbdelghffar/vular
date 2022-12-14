import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {

      light: {
        primary: '#1976D2',
        secondary: '#363636'
      },
    },
  },
});
