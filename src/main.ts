import { createApp } from 'vue';
// import { globalRegister } from './global';
import 'normalize.css';
import './assets/css/index.less';

import App from './App.vue';

import store from './store';
import router from './router';
// 全局引入elementPlus样式
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './service/axios_demo';
import mxRequest from './service';
import { setupStore } from './store';
import { globalRegister } from './global/index';

const app = createApp(App);
app.use(store);
app.use(ElementPlus);
app.use(globalRegister);
setupStore();
app.use(router);

app.mount('#app');
