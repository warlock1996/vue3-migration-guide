<template>
  <List :parent="'ul'" :items="items" />
</template>

<script>
import { inject, onMounted, ref, toRefs } from "vue";
import List from "@/functional/List";
import useUserRepositories from "@/composables/useUserRepositories";
import useRepositoryNameSearch from "@/composables/useRepositoryNameSearch";
export default {
  props: ["user", "searchQuery"],
  setup(props, ctx) {
    const ul = ref(null);
    const theme = inject("theme");
    const changeTheme = inject("changeTheme");

    const { user, searchQuery } = toRefs(props);
    const { repos, getUserRepos } = useUserRepositories(user);
    const { filteredBySearchQuery } = useRepositoryNameSearch(
      repos,
      searchQuery
    );

    return {
      repos: filteredBySearchQuery,
      getUserRepos,
      searchQuery,
      theme,
      changeTheme,
      ul,
    };
  },
  components: {
    List,
  },
  data() {
    return {
      items: [
        {
          text: "A Github Star",
          children: [
            { text: "Github Star 1" },
            {
              text: "Github Star 2",
              children: [
                { text: "Github Star 2a" },
                { text: "Github Star 2b" },
                { text: "Github Star 2c" },
              ],
            },
            {
              text: "Github Star 3",
              children: [
                { text: "Github Star 3a" },
                { text: "Github Star 3b" },
                { text: "Github Star 3c" },
              ],
            },
          ],
        },
        {
          text: "A Reddit Star",
          children: [
            { text: "Reddit Star 1" },
            { text: "Reddit Star 2" },
            { text: "Reddit Star 3" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.changeTheme();
  },
};
</script>
