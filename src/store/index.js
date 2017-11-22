import Vue from 'vue';
import Vuex from 'vuex';
import { mapState } from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
export default store;