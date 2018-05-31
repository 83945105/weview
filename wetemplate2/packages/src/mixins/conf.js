import {toUpperCase, toHumpFormat} from '../utils/util.js';

const projectPrefix = 'we-template';

const prefixNameCls = toUpperCase(toHumpFormat(projectPrefix), 1);

export default {
  prefixCls: projectPrefix,
  prefixNameCls: prefixNameCls,
  data() {
    return {
      prefixCls: projectPrefix
    };
  },

  computed: {
    prefixNameCls() {
      return prefixNameCls;
    }
  }
};
