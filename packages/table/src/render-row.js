export default {
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props) :
      ctx.props.columns.map(column => {
        return ctx.props.cellRender(h, ctx.props.row, column);
      });
  },
  name: 'RenderRow',
  functional: true,
  props: {
    render: Function,
    cellRender: Function,
    row: Object,
    columns: Array
  }
};
