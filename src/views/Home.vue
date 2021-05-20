<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.shake-enter-active, .shake-leave-active {
  animation: shake .25s linear;
}
@keyframes shake {
  0% {
    transform: translateX(20px)
  }
  20% {
    transform: translateX(0)
  }
  40% {
    transform: translateX(20px)
  }
  60% {
    transform: translateX(0)
  }
  80% {
    transform: translateX(20px)
  }
  100% {
    transform: translateX(0)
  }
  
}
</style>

<template>
  <!-- https://v3.vuejs.org/guide/component-provide-inject.html -->
  <!-- https://v3.vuejs.org/guide/component-slots.html -->
  <!-- https://v3.vuejs.org/guide/transitions-enterleave.html -->
  
  <input type="button" value="show/hide card" @click="show = !show" />
  <transition name="shake" mode="ease-in">
    <base-card v-if="show">
      <template v-slot:footer="{ func }">
        <h1>{{ func("Card Footer") }}</h1>
      </template>
    </base-card>
  </transition>


  <!-- https://v3.vuejs.org/guide/migration/v-bind.html -->
  <!-- <custom-input
    v-bind="config"
    v-model:inputVal.capitalize="inputval"
    v-model:textArea="textArea"
    v-on:clicked="show = false"
  >
    <p>paragraph</p>
  </custom-input>

  <Modal
    class="modal"
    :style="{ backgroundColor: 'black' }"
    v-if="show"
  />
 -->
  <!-- https://v3.vuejs.org/guide/migration/v-if-v-for.html -->
  <!-- <template v-for="n in ['apple', 'bananna', 'citron']" :key="n">
    <Todos class="todo-item" style="{ color: 'black'}" :level="1">{{
      n
    }}</Todos>
  </template> -->
</template>

<script>
import { nextTick, computed } from "vue";
import CustomInput from "@/components/customInput.vue";
import Todos from "@/components/todo.js";
import { defineAsyncComponent } from "vue";

export default {
  name: "Home",
  provide() {
    return {
      buttonText: computed(() => this.providedText),
    };
  },
  data() {
    return {
      show: false,
      inputval: "Arslan",
      textArea: "123",
      config: {
        name: "text",
        property: "text",
      },
      providedText: "asd",
    };
  },
  components: {
    CustomInput,
    Todos,
    Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
    BaseCard: defineAsyncComponent(() => import("@/components/BaseCard.vue")),
  },
  mounted() {
    setInterval(() => {
      this.providedText = Date.now().toLocaleString("en");
    }, 1000);
    nextTick(() => {
      console.log("inside nexttick", document);
    });
  },
};
</script>
