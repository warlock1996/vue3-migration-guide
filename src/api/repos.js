export const getUserRepositories = async (user) => {
  return await fetch(`https://api.github.com/users/${user}/repos`).then((r) =>
    r.json()
  );
};
