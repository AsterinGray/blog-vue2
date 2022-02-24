import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Home.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = { getAllPosts: jest.fn() };
    getters = { getPosts: jest.fn() };
    store = new Vuex.Store({ actions, getters });
  });

  it('calls store action "getAllPost" on mounted', () => {
    shallowMount(Home, { store, localVue });
    expect(actions.getAllPosts).toBeCalled();
  });

  it('calls store getters "getPosts"', () => {
    shallowMount(Home, { store, localVue });
    expect(getters.getPosts).toBeCalled();
  });
});
