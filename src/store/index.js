import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = {
  posts: [],
  comments: [],
};

export const getters = {
  getPosts: (state) => state.posts,
  getPostById: (state) => (id) =>
    state.posts.find((post) => post.id === Number(id)),
  getComments: (state) => state.comments,
};

export const mutations = {
  setPosts: (state, data) => (state.posts = data),
  setComments: (state, data) => (state.comments = data),
};

export const actions = {
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
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
