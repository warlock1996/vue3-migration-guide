<template>
  <fieldset style="width: 400px">
    <legend>Form</legend>
    <input :value="inputVal" @input="emitUpdateEvent" type="text" />
    <textarea :value="textArea" type="text"> </textarea>
    <button @click="$emit('clicked', { a: 1, b: 3 })">submit me</button>
  </fieldset>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    inputVal: String,
    textArea: String,
    inputValModifiers: Object
  },
  emits: {
    "update:inputVal": null,
    "update:textArea": null,
    clicked: ({ a, b }) => {
      if (a !== 1 && b !== 2) {
        console.warn("validation failed");
        return false;
      }
      return true;
    },
  },
  methods: {
    emitUpdateEvent ({ target: { value }}) {
      console.log(this.inputValModifiers)
      const val = value[0].toUpperCase() + value.slice(1, value.length)
      this.$emit('update:inputVal', val)
    }
  }
};
</script>

<style>
body {
  display: grid;
  place-items: center;
}
fieldset > input,
textarea {
  display: block;
  width: 100%;
}
</style>
