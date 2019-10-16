import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [{
            age: 18,
            name: '小李'
        }, {
            age: 20,
            name: '小琪'
        }, {
            age: 30,
            name: '李琪'
        }],
        bookList: []
    },
    getters: {
        getPeople(state, getters) {
            return state.list.filter(item => item.age < 20)
        },
        getLength(state, getters) {
            return getters.getPeople.length
        },
        getbookList(state, getters) {
            return state.bookList
        }
    },
    mutations: {
        addBook(state, obj) {
            state.bookList.push(obj)
        }
    },

    actions: {
        aa({commit}) {
          
            Axios.get('/api/login').then((res) => {
                commit('addBook')
            })
        }
    },

})