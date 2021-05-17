import { h } from "vue";

const Todos = (props, context) => {
  console.log(props, context);
  return h(`h${props.level}`, context.attrs, context.slots);
};

Todos.props = ["level"];

export default Todos;
