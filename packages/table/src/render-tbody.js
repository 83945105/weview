import RenderRow from "./render-row.js";
import RenderCell from "./render-cell.js";

export default {
  components: {
    RenderRow,
    RenderCell
  },
  render(h) {
    return h('tbody', {}, this.data.map(row => {
      return h('tr', {}, [h('render-row', {
        props: {
          row: row,
          columns: this.columns,
          cellRender: (h, row, column) => {
            return h('td', {
              'class': {
                'is-leaf': true
              }
            }, row[column.prop]);
          }
        }
      })]);
    }));
  },
  name: 'RenderTbody',
  props: {
    data: Array,
    columns: Array
  }
};
