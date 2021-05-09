import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export const store = new Vuex.Store({


    state: {
        token: localStorage.getItem('auth') || '',
        user_id: localStorage.getItem('user_id') || '',

    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('auth', token);
            state.token = token;

        },
        clearToken(state) {
            localStorage.removeItem('auth');
            state.token = '';
        },
        setUserId(user_id) {
            localStorage.setItem('user_id', user_id);
            state.user_id = user_id;
        },
    }

});