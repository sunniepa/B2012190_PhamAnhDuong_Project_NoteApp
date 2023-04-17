import * as VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = VueRouter.createRouter({
	routes: [{ path: "/", component: HomePage }],
	history: VueRouter.createWebHashHistory(),
});

export default router;
