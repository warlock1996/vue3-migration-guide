import { h } from "vue";

const Typography = (props, ctx) => {
  return h(`${props.tag}`, { ...props }, ctx.slots);
};

Typography.props = {
  tag: {
    Type: String,
    required: true,
  },
};

export default Typography;
