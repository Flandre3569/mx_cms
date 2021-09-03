import { Module } from 'vuex';

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard';

import { IDashboardState } from './types';
import { IRootState } from '../../types';
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    // 请求图表的数据
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryCountResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryFavorResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categorySaleResult.data);
      const addressGoodsResult = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsResult.data);
    }
  }
};

export default dashboardModule;
