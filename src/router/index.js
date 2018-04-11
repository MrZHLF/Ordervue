import Vue from 'vue'
import Router from 'vue-router'
import Pos from "@/components/page/Pos"
import Shop from "@/components/page/Shop"
import Cashier from "@/components/page/Cashier";
import Member from "@/components/page/Member";
import Statistics from "@/components/page/Statistics";
import Setup from "@/components/page/Setup";
Vue.use(Router)

export default new Router({
  routes: [
    ,
    {
      path: "/",
      name: "PosLink",
      component: Pos
    },
    {
      path: "Shop",
      name: "ShopLink",
      component: Shop
    },
    {
      path: "Cashier",
      name: "CashierLink",
      component: Cashier
    },
    {
      path: "Member",
      name: "MemberLink",
      component: Member
    },
    {
      path: "Statistics",
      name: "StatisticsLink",
      component: Statistics
    },
    {
      path: "Setup",
      name: "SetupLink",
      component: Setup
    }
  ]
});
