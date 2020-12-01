import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {RESOURCE_CUSTOMER} from '../api';

Vue.use(Vuex);

const customerStore = {
    namespaced: true,
    state:{
        customers : [],
        customer : {}
    },
    mutations: {
        FETCH(state, customers) {
            state.customers = customers;
        }
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_CUSTOMER)
            .then(response => commit('FETCH', response.data))
            .catch();
        }
    }
}

export default customerStore;