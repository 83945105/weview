<script>

  import Conf from '../../src/mixins/conf.js';
  import RenderThead from './render-table-thead.js';
  import RenderTbody from './render-table-body.js';
  import TableHeader from './table-header.js';
  import {parseColumnsToHeader} from './table-header.js';
  import TableBody from './table-body.js';

  export default {

    components: {RenderThead, RenderTbody, TableHeader, TableBody},

    render(h) {
      return h('div', {
        'class': {
          'we-table': true,
          'we-table-align-left': true,
          'we-table-border': true,
          'we-table-scroll-x': true,
          'we-table-scroll-y': true
        }
      }, [
        h('table-header', {
          props: {
            data: this.tableHeaderData,
            columns: this.tableHeaderColumns
          }
        }),
        h('table-body', {
          props: {
            data: this.data,
            columns: this.columns
          }
        })
      ]);
    },

    name: `${Conf.prefixCls}-table`,

    componentName: `${Conf.prefixNameCls}Table`,

    optionName: `table`,

    mixins: [Conf],

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
    },

    data() {
      return {
        tableHeaderData: [],
        tableHeaderColumns: []
      };
    },

    watch: {
      columns: {
        immediate: true,
        handler(val) {
          let tableHeaderRow = {};
          let tableHeaderColumns = [];
          val.forEach(column => {
            tableHeaderRow[column.prop] = column.label;
            tableHeaderColumns.push({
              label: '',
              prop: column.prop
            });
          });
          this.tableHeaderData = [tableHeaderRow];
          this.tableHeaderColumns = tableHeaderColumns;
        }
      }
    }

  }
</script>
