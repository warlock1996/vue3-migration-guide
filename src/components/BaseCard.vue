<template>
  <div class="card">
    <div class="card__header">
      <slot name="header">
        Header
      </slot>
      <base-button></base-button>
    </div>
    <div class="card__content">
      <slot></slot>
    </div>
    <div class="card__footer">
      <slot name="footer" :func="(v) => v.toUpperCase()"></slot>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "BaseCard",
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.card {
  background-color: whitesmoke;
  color: black;
  height: 400px;
  width: 400px;
  border: 1px solid lightblue;
  padding: 16px;
}
.card__header {
  display: flex;
  justify-content: space-between;
}
</style>
