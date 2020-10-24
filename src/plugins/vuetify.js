import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    // icons: {
    //     iconfont: 'md' || 'fa'
    // },
    theme: {
        themes: {
            light: {
                primary: '#2c3e50',
                secondary: '#eb4d4b'
            },
        }
    }
});
