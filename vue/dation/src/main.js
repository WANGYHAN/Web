import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import ElementUI from "element-ui";
import "@/theme/element-ui-index.css";
import store from "@/store";
import {
    sync
} from "vuex-router-sync";

sync(store, router);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app");
