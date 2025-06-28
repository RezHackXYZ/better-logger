<script>
	import Nav from "$lib/modules/nav/nav.svelte";
	import Popup from "$lib/modules/popup/popup.svelte";
	import Window from "$lib/modules/setings/window.svelte";

	import { showSetings } from "$lib/modules/setings/showStore.js";
	import App from "./app.svelte";
</script>

<Popup showPopup={$showSetings}>
	<Window />
</Popup>

<div class="flex h-screen flex-col">
	<Nav />
	<div class="flex-1"><App /></div>
</div>
