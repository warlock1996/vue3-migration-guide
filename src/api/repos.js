import axios from "axios"
export const getUserRepositories = async (user) => {
  try {
    return await axios.get(`https://api.github.com/users/${user}/repos`).then((r) =>
    r.json()
    );
  } catch (error) {
      console.log(error, Object.entries(error))
  }
};
