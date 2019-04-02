import RenderTableThead from "./render-table-thead.js";

export default {
  components: {
    RenderTableThead
  },
  render(h) {
    return h('div', {
      'class': {
        'we-table-header-wrapper': true
      }
    }, [h('render-table-thead', {
      props: {
        data: this.data,
        columns: this.columns
      }
    })]);
  },
  name: 'TableHeader',
  props: {
    data: Array,
    columns: Array
  }
}

export function parseColumnsToHeader(columns) {
  let tableHeaderRow = {};
  let tableHeaderColumns = [];
  columns.forEach(column => {
    tableHeaderRow[column.prop] = column.label;
    tableHeaderColumns.push({
      label: '',
      prop: column.prop
    });
  });
  return {tableHeaderData: [tableHeaderRow], tableHeaderColumns: tableHeaderColumns};
}
