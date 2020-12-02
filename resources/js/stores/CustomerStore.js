import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {RESOURCE_CUSTOMER} from '../api';

Vue.use(Vuex);

const customerStore = {
    namespaced: true,
    state:{
        vui : '',
        customers : [],
        customer : {}
    },
    mutations: {
        FETCH(state, customers) {
            state.customers = customers;
        },
        FETCH_ONE(state, customer) {
            state.customer = customer;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_CUSTOMER)
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_CUSTOMER}/${id}/edit`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
    }
}

export default customerStore;