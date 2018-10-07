import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import * as getters from './getter';
Vue.use(Vuex);

// 定义初始化的state
const defaultState = {
  count: 0,
  topic: []
}
Vue.use(Vuex);
// 判断当前的开发环境
const inBrowser = typeof window !== 'undefined'
/*if (!inBrowser && process.env.NODE_ENV === 'development') {
  Vue.use(Vuex);
} */
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

// 定义mutations
const mutations = {
  INCREMENT: (state) => ++state.count,
  DECREMENT: (state) => --state.count,
  TOPICS_LIST:(state,topics)=>{
    state.topics = topics
  }
}

export function createStore(){
  const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  });
  return store;
}