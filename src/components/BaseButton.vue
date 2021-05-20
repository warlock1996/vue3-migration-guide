<template>
  <button type="button">
    <slot>{{ buttonText.value }}</slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  inject: ['buttonText']
};
</script>
