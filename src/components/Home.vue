<template>
  <div class="hello">
    <editor v-model='myContent'></editor>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import Editor from './Editor.vue'
// 1、引入VueUeditorWrap组件
export default {
  name: 'home',
  data () {
    return {}
  },
  computed:{
    ...mapState({
      title:state=>state.title,
      content:state=>state.content
    }),
    myContent:{
      get(){
        return this.content
      },
      set(v){
        this.changeArticle({
          title:this.title,
          content:v
        })
      }
    }
  },
  components: {
    Editor
  },
  methods: {
    // 6. 查看绑定的数据
    showData () {
      alert(this.msg)
      console.log(this.msg)
    },
    ...mapMutations({
      changeArticle:'GETARTICLE_SUCCESS'
    }),
    ...mapActions({
      getArticleById:'getArticleById'
    })
  },
  mounted(){
    this.getArticleById()
  }
}
</script>

<style>
.preview{
  min-height: 150px;
}
</style>
