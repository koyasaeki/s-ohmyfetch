import { $fetch } from "ohmyfetch";

interface GitHubApi {
  // eslint-disable-next-line camelcase
  current_user_url: string;
}

// eslint-disable-next-line camelcase
const { current_user_url } = await $fetch<GitHubApi>("https://api.github.com/");
// eslint-disable-next-line no-console
console.log(current_user_url);
