<script>
	import Nav from "$lib/modules/nav/nav.svelte";
	import Popup from "$lib/modules/popup/popup.svelte";
	import Window from "$lib/modules/Settings/window.svelte";

	import { showSettings } from "$lib/modules/Settings/showStore.js";
	import App from "./app.svelte";
</script>

<Popup showPopup={$showSettings}>
	<Window />
</Popup>

<div class="flex h-screen flex-col">
	<Nav />
	<div class="flex-1"><App /></div>
</div>
