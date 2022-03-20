import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/base.scss";
// import "./assets/iconfont.css"
const app = createApp(App)
app.use(store).use(router)

router.isReady().then(()=>{
  app.mount("#app");
})
