import { $fetch } from "ohmyfetch";

const data = await $fetch<object>("https://api.github.com/");
// eslint-disable-next-line no-console
console.log(data);
