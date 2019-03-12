import RenderRow from "./render-row.js";
import RenderCell from "./render-cell.js";

export default {
  components: {
    RenderRow,
    RenderCell
  },
  render(h) {
    return h('thead', {}, this.data.map(row => {
      return h('tr', {}, [h('render-row', {
        props: {
          row: row,
          columns: this.columns,
          cellRender: (h, row, column) => {
            return h('th', {
              'class': {
                'is-leaf': true
              }
            }, row[column.prop]);
          }
        }
      })]);
    }));
  },
  name: 'RenderThead',
  props: {
    data: Array,
    columns: Array
  }
};
