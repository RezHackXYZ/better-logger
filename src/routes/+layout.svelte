<script>
	import Nav from "$lib/modules/nav/nav.svelte";
	import Popup from "$lib/modules/popup/popup.svelte";
	import Window from "$lib/modules/setings/window.svelte";

	import { showSetings } from "$lib/modules/setings/showStore.js";

	import { Toaster } from "svelte-5-french-toast";
	import "../app.css";

	let { children } = $props();
</script>

<Toaster />

<Popup showPopup={$showSetings}>
	<Window />
</Popup>

<Nav />

<div class="box-border h-full">{@render children()}</div>