/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/20
 * version: v1.0
 */
import Alert from './src/Alert';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
