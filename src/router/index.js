import Vue from 'vue'
import Router from 'vue-router'
import First from "../components/First";
import Second from "../components/Second";
import Note from "../components/Note";
import Msg from "../components/Msg";


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/first",component:First},
    {path:"/second",component:Second},
    {path:"/note",component:Note},
    {path:"/msg",component:Msg},
    {path:"/",redirect:"/first"},
  ]
})
