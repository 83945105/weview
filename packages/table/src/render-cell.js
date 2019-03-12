export default {
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props) :
      h('div', {
        'class': {
          'cell': true
        }
      }, ctx.props.row[ctx.props.prop]);
  },
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
    row: Object,
    label: String,
    prop: String
  }

};
