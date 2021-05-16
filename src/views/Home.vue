<template>
  <!-- https://v3.vuejs.org/guide/migration/v-bind.html -->
  <custom-input
    v-bind="config"
    v-model:inputVal="inputval"
    v-model:textArea="textArea"
  />

  <!-- https://v3.vuejs.org/guide/migration/v-if-v-for.html -->
  <template v-if="false" v-for="n in 5" :key="n">
    <div class="num">
      {{ n }}
    </div>
  </template>
</template>

<script>
import { nextTick } from "vue";
import CustomInput from "@/components/customInput.vue";

export default {
  name: "Home",
  data() {
    return {
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
  },
  mounted() {
    nextTick(() => {
      console.log("inside nexttick", document);
    });
  },
};
</script>
