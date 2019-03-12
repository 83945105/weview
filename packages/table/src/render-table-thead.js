import RenderThead from './render-thead.js';
import RenderColgroup from './render-colgroup.js';

export default {
  components: {RenderThead, RenderColgroup},
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
      h('render-thead', {
        props: {
          data: this.data,
          columns: this.columns
        }
      })
    ]);
  },
  name: 'RenderTableThead',
  props: {
    data: Array,
    columns: Array
  }

};
