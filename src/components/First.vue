<template>
  <div>
    <h3>这是用户管理</h3>
    <table border="2">
      <tr>
        <td>ID</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>出生日期</td>
        <td>所在地</td>
        <td>操作</td>
      </tr>
      <tr v-for="(user,index) in user_list" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.bir }}</td>
        <td>{{ user.address }}</td>
        <td>
          <button @click="show(index)">查看用户信息</button>
          |
          <button @click="del_user(index)">删除</button>
        </td>
      </tr>


    </table>
  </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      user_list: [
        {id: 1, name: "小黑", age: 15, bir: '2005-3-15', address: '北京'},
        {id: 2, name: "小白", age: 20, bir: '1999-3-15', address: '上海'},
        {id: 3, name: "小红", age: 25, bir: '1995-3-15', address: '天津'},
        {id: 4, name: "小惠", age: 35, bir: '1998-3-15', address: '重庆'},
        {id: 5, name: "小灰", age: 45, bir: '1980-3-15', address: '深圳'},
      ]
    }
  },
  methods: {
    show(index) {
      this.$router.push({path: "/msg?num=" + index})
    },
    del_user(index){
      console.log(index)
      this.user_list.splice(index,1)
    },
  }
}
</script>

<style scoped>
h3 {
  color: red;
}
</style>
