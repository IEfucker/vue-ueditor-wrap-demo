import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    content: ''
  },
  getters: {
  },
  mutations: {
    GETARTICLE_SUCCESS (state, article) {
      console.log(article, '成功')
      for (let p in article) {
        if (state[p] !== undefined) {
          state[p] = article[p]
        }
      }
    }
  },
  actions: {
    getArticleById (store, params) {
      setTimeout(() => {
        console.log('模拟接口请求，返回成功')
        store.commit('GETARTICLE_SUCCESS', {
          title: 'test title',
          content: 'test content'
        })
      }, 1)
    }
  }
})
