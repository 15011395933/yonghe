import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home"
import search from "./search";
import sort from "./sort";
import mine from "./mine"; 
import register from "./register"; 
import login from "./login"
import detail from "./detail"

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        home,
        sort,
        search,
        mine, 
        register, 
        login,
        detail
    ]
})