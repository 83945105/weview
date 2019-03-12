import RenderTbody from './render-tbody.js';
import RenderColgroup from './render-colgroup.js';

export default {
  components: {RenderTbody, RenderColgroup},
  render(h) {
    return h('table', {
      'class': {
        'we-table-content': true
      }
    }, [
      h('render-colgroup', {
        props: {
          columns: this.columns
        }
      }),
      h('render-tbody', {
        props: {
          data: this.data,
          columns: this.columns
        }
      })
    ]);
  },
  name: 'RenderTableBody',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  }

};
