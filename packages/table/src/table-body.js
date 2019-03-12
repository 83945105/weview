import RenderTableBody from "./render-table-body.js";

export default {
  components: {
    RenderTableBody
  },
  render(h) {
    return h('div', {
      'class': {
        'we-table-content-wrapper': true
      }
    }, [h('render-table-body', {
      props: {
        data: this.data,
        columns: this.columns
      }
    })]);
  },
  name: 'TableBody',
  props: {
    data: Array,
    columns: Array
  }
}
