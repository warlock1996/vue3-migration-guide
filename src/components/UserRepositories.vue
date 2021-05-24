<template>
  <ul ref="ul">
    <li v-for="(repo, index) in repos" :key="index">
      {{ repo.name }}
    </li>
  </ul>
</template>

<script>
import { inject, onMounted, ref, toRefs } from "vue";
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
      ul
    };
  },
  mounted() {
    this.changeTheme();
  },
};
</script>
