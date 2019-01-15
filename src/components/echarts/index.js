import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
// 导入工具部分
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title';
// register component to use
import 'echarts/lib/component/legendScroll';
// register component to use
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/dataZoom';
// 注册组件后即可使用
Vue.component('v-chart', ECharts)

