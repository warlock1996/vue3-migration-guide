import { h } from "vue";

const Todos = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots);
};

Todos.props = {
  level: {
    Type: Number,
    default: "1",
    validator: function(value) {
      return [1, 2, 3, 4, 5, 6].includes(value) ? true : false;
    },
  },
};

export default Todos;
