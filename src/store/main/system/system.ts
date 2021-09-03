import { IRootState } from '@/store/types';
import { Module } from 'vuex';
import { ISystemState } from './types';
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system';

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList;
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    }
  },
  getters: {
    pageListData(state) {
      // return (pageName: string) => {
      //   switch (pageName) {
      //     case 'users':
      //       return state.userList;
      //     case 'role':
      //       return state.roleList;
      //     case 'goods':
      //       return state.goodsList;
      //     case 'menu':
      //       return state.menuList;
      //   }
      // };
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      // return (pageName: string) => {
      //   switch (pageName) {
      //     case 'users':
      //       return state.userCount;
      //     case 'role':
      //       return state.roleCount;
      //     case 'goods':
      //       return state.goodsCount;
      //     case 'menu':
      //       return state.menuCount;
      //   }
      // };
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageAction({ commit }, payload: any) {
      // 获取pageUrl
      // const pageName = payload.pageName;
      // let pageUrl = '';
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list';
      //     break;
      //   case 'role':
      //     pageUrl = '/role/list';
      //     break;
      //   case 'goods':
      //     pageUrl = '/goods/list';
      //     break;
      //   case 'menu':
      //     pageUrl = '/menu/list';
      //     break;
      // }
      // // 对页面发送请求
      // const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      // // 将数据存储到state中
      // const { list, totalCount } = pageResult.data;
      // switch (pageName) {
      //   case 'users':
      //     commit(`changePageList`, list);
      //     commit(`changePageCount`, totalCount);
      //     break;
      //   case 'role':
      //     commit(`changeRoleList`, list);
      //     commit(`changeRoleCount`, totalCount);
      //     break;
      //   case 'goods':
      //     commit(`changeGoodsList`, list);
      //     commit(`changeGoodsCount`, totalCount);
      //     break;
      //   case 'menu':
      //     commit(`changeMenuList`, list);
      //     commit(`changeMenuCount`, totalCount);
      //     break;
      // }
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data;

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      // 需要告诉我pageName  去拼接路径
      // 需要知道id   拼接url
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      // 调用删除的网络请求
      await deletePageData(pageUrl);

      // 从新请求最新的数据，再发送一遍网络请求
      dispatch('getPageAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);

      // 2.请求最新的数据
      dispatch('getPageAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async editPageDataAction({ dispatch }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload;
      console.log(editData);
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);

      // 2.请求最新的数据
      dispatch('getPageAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
