export default {
  render: (h, ctx) => {
    return h('colgroup', ctx.props.columns.map(column => {
      return h('col', {
        attrs: {
          width: column.width || '200'
        }
      });
    }));
  },
  name: 'RenderColgroup',
  functional: true,
  props: {
    columns: Array
  }
};
