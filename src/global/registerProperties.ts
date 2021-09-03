import { App } from 'vue';
import { formatUtcString } from '../utils/date-format';

export default function registerProperties(app: App) {
  // 对时间进行格式化
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value);
    }
  };
}
