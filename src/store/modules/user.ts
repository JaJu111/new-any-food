import { AFUser } from "@/mixins/interface";

const state = {
    isAuthenticated: false,
    user: null
};
  
const mutations = {
    SET_USER(state, user: AFUser) {
        state.user = user;
        state.isAuthenticated = true;
    },
    CLEAR_USER(state) {
        state.user = null;
        state.isAuthenticated = false;
    }
};
  
const actions = {
    login({ commit }, user: AFUser) {
        // Вызывается при успешной авторизации
        commit('SET_USER', user);
    },
    logout({ commit }) {
        // Очищает состояние при выходе пользователя
        commit('CLEAR_USER');
    }
};
  
const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    userName: (state): string | null => state.user ? state.user.name : null
};
  
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};