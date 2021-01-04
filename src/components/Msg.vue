<template>
  <div>
    <h3>这是用户信息展示页</h3>
    <table border="2">
      <tr>
        <td>ID</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>出生日期</td>
        <td>所在地</td>
      </tr>
      <tr >
        <td v-for="(value,key,index) in user_list[a]" :key="index">{{value }}</td>
      </tr>


    </table>
  </div>

</template>

<script>
export default {
  name: "Msg",
  data() {
    return {
      user_list: [
        {id: 1, name: "小黑", age: 15, bir: '2005-3-15', address: '北京'},
        {id: 2, name: "小白", age: 20, bir: '1999-3-15', address: '上海'},
        {id: 3, name: "小红", age: 25, bir: '1995-3-15', address: '天津'},
        {id: 4, name: "小惠", age: 35, bir: '1998-3-15', address: '重庆'},
        {id: 5, name: "小灰", age: 45, bir: '1980-3-15', address: '深圳'},
      ],
      a: this.$route.query.num
    }
  },
}
</script>

<style scoped>

</style>
