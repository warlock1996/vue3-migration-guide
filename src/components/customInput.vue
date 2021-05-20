<template>
  <fieldset style="width: 400px">
    <legend>Form</legend>
    <input
      :value="inputVal"
      type="text"
    />
    <textarea
      :value="textArea"
      type="text"
    >
    </textarea>
  </fieldset>
</template>

<script>
export default {
  name: "CustomInput",
  emits: ['update:inputVal', 'update:textArea'],
  props: {
    inputVal: String,
    textArea: String,
  },
};
</script>

<style >
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
