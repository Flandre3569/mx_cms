import { App } from 'vue';
import 'element-plus/lib/theme-chalk/base.css';
// 以局部注册的形式注册element
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
