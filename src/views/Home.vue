<template>
  <!-- https://v3.vuejs.org/guide/migration/v-bind.html -->
  <custom-input
    v-bind="config"
    v-model:inputVal="inputval"
    v-model:textArea="textArea"
  />

  <Modal v-if="show" />
  <input type="button" value="show/hide modal" @click="show = !show" />
  <!-- https://v3.vuejs.org/guide/migration/v-if-v-for.html -->
  <template v-for="n in ['apple', 'bananna', 'citron']" :key="n">
    <Todos :level="1">{{ n }}</Todos>
  </template>
</template>

<script>
import { nextTick } from "vue";
import CustomInput from "@/components/customInput.vue";
import Todos from "@/components/todo.js";
import { defineAsyncComponent } from "vue";

export default {
  name: "Home",
  data() {
    return {
      show: false,
      inputval: "Arslan",
      textArea: "123",
      config: {
        name: "text",
        property: "text",
      },
    };
  },
  components: {
    CustomInput,
    Todos,
    Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
  },
  mounted() {
    nextTick(() => {
      console.log("inside nexttick", document);
    });
  },
};
</script>
