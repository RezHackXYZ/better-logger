import { writable } from "svelte/store";

export let slackID = writable(null);
export let Hackatime = writable(null);

export let selectedAppName = writable(null);
export let selectedHackatimeProjectName = writable(null);

export let currentView = writable("menu");

export let UsedHackatimeProjectName = writable(null);

export let lang = writable(null);