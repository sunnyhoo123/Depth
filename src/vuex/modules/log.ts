// export interface IQueryLog {
//   list: Array<ILog>;
//   total: number;
//   totalPage: number;
// }
// const initialState = {
//   queryLog: EMPTYOBJECT as IQueryLog,
//   moduleLogList: EMPTYOBJECT as IModuleLogList
// };

// const state = cloneDeep(initialState);

// const actions = {
//   [actionTypes.ADD_LOG]({ state }, param) {
//     return log.addLog(param);
//   },
//   [actionTypes.FETCH_LOG]({ state }, param) {
//     return log.fetchLog(param).then(data => {
//       state.queryLog = data;
//     });
//   },
//   [actionTypes.FETCH_USER_LIST]({ state }, param) {
//     return log.fetchUserList(param);
//   },
//   [actionTypes.FETCH_MODULE]({ state }, param) {
//     return log.fetchModule(param);
//   },
//   [actionTypes.FETCH_ORGANS]({ state }, param) {
//     return log.fetchOrgans(param);
//   },
//   [actionTypes.INIT]({ state }) {
//     assign(state, cloneDeep(initialState));
//   }
// };

// const mutations = {};

// export default {
//   namespaced: true,
//   state,
//   actions,
//   mutations
// };