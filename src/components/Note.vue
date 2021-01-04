<template>
  <div>
    <input type="text" v-model="msg">
    <button @click="add_note">发表留言</button>
    <hr>
    <ul>
      <li v-for="(value,index ) in msg_list" :key="index">
        <span>{{ value }}</span><a href="javascript:;" @click="del_note(index)">删除</a>
      </li>
    </ul>
    <span v-show="msg_list.length!=0">总数量:{{msg_list.length}}</span>
    <input type="button" value="清空留言板" @click="del_all" v-show="msg_list.length!=0">

  </div>

</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      msg: '',
      msg_list: localStorage.msg_list?JSON.parse(localStorage.msg_list):[],
      //msg_list: [],
    }
  },
  methods: {
    //发表留言的方法
    add_note() {
      let msg = this.msg;
      if (msg) {
        //将留言板数据进行持久化  localStorage
        this.msg_list.unshift(this.msg);
        localStorage.msg_list = JSON.stringify(this.msg_list);
        this.msg='';
      }
    },
    //删除留言
    del_note(index){
      this.msg_list=JSON.parse(localStorage.msg_list)
      this.msg_list.splice(index,1)
      localStorage.msg_list = JSON.stringify(this.msg_list)
    },
    //清空留言版
    del_all(){
      this.msg_list=[];
      localStorage.clear()
    },
  },
}
</script>

<style scoped>

</style>
