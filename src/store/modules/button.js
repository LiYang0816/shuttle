const state = {
  pieceList: [{
    id: 1,
    canClick: true,
    content: ''
  },
  {
    id: 2,
    canClick: true,
    content: ''
  },
  {
    id: 3,
    canClick: true,
    content: ''
  },
  {
    id: 4,
    canClick: true,
    content: ''
  },
  {
    id: 5,
    canClick: true,
    content: ''
  },
  {
    id: 6,
    canClick: true,
    content: ''
  },
  {
    id: 7,
    canClick: true,
    content: ''
  },
  {
    id: 8,
    canClick: true,
    content: ''
  },
  {
    id: 9,
    canClick: true,
    content: ''
  }],
  vmodel: ''
}

// getters 就像是过滤，将结果转成想要的，如 [a,b,c] => [aa,bb,cc]
const getters = {
}

// actions 调用接口
const actions = {
}

// mutations 调用状态
const mutations = {
  pieceList (state, res) {
    // console.log(res, 'store');
    return state.pieceList = [...res];
  },
	SET_VMODEL (state, res) {
    return state.vmodel = res;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
