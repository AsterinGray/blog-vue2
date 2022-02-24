import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    commets: [],
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === Number(id));
    },
    getComments: (state) => {
      return state.commets;
    },
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    },
    setComments(state, data) {
      state.commets = data;
    },
  },
  actions: {
    async getAllPosts({ commit }) {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      commit("setPosts", res.data);
    },
    async getAllComments({ commit }, id) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      commit("setComments", res.data);
    },
  },
  modules: {},
});
