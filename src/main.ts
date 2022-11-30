import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.use(Router)
app.use(ElementPlus)
app.mount("#app");
