import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import hintPop from '../plugin/hintPop'

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'aaa', done: true },
            { id: 2, text: 'bbb', done: false },
            { id: 3, text: 'ccc', done: false }
          ]
    },
    mutations: {
        INCREMENT (state) {
            state.count++
        },
        SETVAL (state,val) {
            state.count = val;
        },
        RESET (state) {
            state.count = 0;
        },
        COUNTALL (state,payload) {
            state.count += payload.num * payload.count;
        }
    },
    getters: {
        doneTodos:state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    actions: {
        asyncSetCount(context,val){
            hintPop.loading();
            setTimeout(() => {
                context.commit('SETVAL',val);
                hintPop.loadingClose();
            },1000)
        }
    }
})
export default store;