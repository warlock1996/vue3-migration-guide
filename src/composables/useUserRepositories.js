import { getUserRepositories } from "@/api/repos";
import { onMounted, ref, watch } from "vue";

export default function useUserRepositories(user) {
  const repos = ref([]);
  const getUserRepos = async () => {
    repos.value = await getUserRepositories(user.value);
  };

  onMounted(() => getUserRepos());
  watch(user, (v) => {
    getUserRepos();
  });

  return {
    repos,
    getUserRepos,
  };
}
