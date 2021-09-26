import { init } from '@mitojs/wx-mini';
import { vuePlugin } from '@mitojs/vue';
import Vue from 'vue';
import App from './App';

const MitoInstance = init(
  {
    debug: true,
    dsn: 'https://test.com/yourInterface',
    maxBreadcrumbs: 100,
    // 配置上报时的请求头
    configReportWxRequest(data) {
      return {
        header: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
        dataType: 'text',
      };
    },
    vue: Vue,
  },
  [vuePlugin]
);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App,
});
app.$mount();
