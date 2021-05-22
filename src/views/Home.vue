<template>
  <base-card>
    <input v-model.lazy="username" type="text" />
    <h1>Search:</h1>
    <input v-model="search" type="text" />
    <user-repositories :user="username" :search-query="search" />
  </base-card>
</template>

<script>
import { defineAsyncComponent, onMounted, provide, readonly, ref } from "vue";
import fruitsMixin from "@/mixins/fruits";
export default {
  name: "Home",
  mixins: [fruitsMixin],
  setup() {
    const theme = ref("light");
    provide("theme", readonly(theme));
    const changeTheme = () => {
      theme.value = "dark";
    };
    provide("changeTheme", changeTheme);
  },
  apple: "2",
  data() {
    return {
      username: "warlock1996",
      search: "",
    };
  },
  mounted() {
    console.log("this.apple", this.apple);
  },
  components: {
    BaseCard: defineAsyncComponent(() => import("@/components/BaseCard.vue")),
    UserRepositories: defineAsyncComponent(() =>
      import("@/components/UserRepositories.vue")
    ),
  },
};
</script>
