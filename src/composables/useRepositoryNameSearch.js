import { computed } from "vue";

export default function useRepositoryNameSearch(repos, searchQuery) {
  const filteredBySearchQuery = computed(() => {
    return repos.value.filter((repo) => repo.name.includes(searchQuery.value));
  });
  return {
    filteredBySearchQuery,
    searchQuery,
  };
}
