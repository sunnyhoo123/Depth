import Vue from "vue"
import Vuex from "vuex"
import contract from "./modules/contract/module.js"

Vue.use(Vuex);

const state ={
    
};

export default new Vuex.Store({
  modules:{
    contract
  },
  state
})