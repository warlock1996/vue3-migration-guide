<template>
  <transition name="fade">
    <div v-if="visible" class="modal">
      <h1 v-highlight>I Am A Modal</h1>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
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
