<template>
    <div v-bind="$attrs">
      asd
    </div>
    <div v-if="visible">
      <h1 >I Am A Modal</h1>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
  mounted () {
    console.log(this.$attrs)
  },
  directives: {
    highlight: {
      beforeMount: function() {},
      mounted: function(el, binding, vnode) {
        el.style.backgroundColor = binding.value || "yellow";
      },
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  background: blue;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  background: red;
}
.modal {
  background: blue;
  width: 30vw;
  height: 30vh;
  position: fixed;
  top: translate(100px, 100px);
}
</style>
