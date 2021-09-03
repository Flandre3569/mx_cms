import * as echatrs from 'echarts';
import chinaMapData from '../data/china.json';

echatrs.registerMap('china', chinaMapData);

export default function (el: HTMLElement) {
  const echartInstance = echatrs.init(el);
  const setOptions = (options: echatrs.EChartsOption) => {
    echartInstance.setOption(options);
  };

  const updateSize = () => {
    echartInstance.resize();
  };

  window.addEventListener('resize', () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    updateSize
  };
}
