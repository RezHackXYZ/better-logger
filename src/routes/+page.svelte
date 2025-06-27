<script>
	import Nav from "$lib/modules/nav/nav.svelte";
	import Popup from "$lib/modules/popup/popup.svelte";
	import Window from "$lib/modules/setings/window.svelte";

	import { showSetings } from "$lib/modules/setings/showStore.js";

	import { onMount } from "svelte";
	import { slackID, Hackatime } from "$lib/store.js";

	onMount(() => {
		slackID.set(localStorage.getItem("slackID") || "");
		Hackatime.set(localStorage.getItem("Hackatime") || "");
	});
</script>

<Popup showPopup={$showSetings}>
	<Window />
</Popup>

<Nav />
