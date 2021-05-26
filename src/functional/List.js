import { h } from "vue";

// SAFE PARENTS
const ALLOWED_PARENTS = ["ul", "ol"];

const iterator = (items, parent) => {
  return items.map((v, i) =>
    h(
      parent ? parent : "li",
      { key: i },
      v.children ? iterator(v.children, "ul") : v.text
    )
  );
};

const List = (props) => {
  return h(props.parent, null, iterator(props.items, props.parent));
};

List.props = {
  parent: {
    Type: String,
    default: "ul",
    required: false,
    validator: (value) => (ALLOWED_PARENTS.includes(value) ? true : false),
  },
  items: {
    Type: Array,
    default: [],
    required: true,
  },
};

export default List;
