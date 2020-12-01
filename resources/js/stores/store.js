import CustomerStore from './CustomerStore';
import Vuex from 'vuex';
import customerStore from './CustomerStore';

const stores = new Vuex.Store({
    modules: {
        customer: customerStore,
    }
});

export default stores;