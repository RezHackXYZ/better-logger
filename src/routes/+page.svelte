<script>

	import { onMount } from "svelte";
	import { slackID, Hackatime } from "$lib/store.js";
	import NoKey from "$lib/views/NoKey/NoKey.svelte";

	onMount(() => {
		slackID.set(localStorage.getItem("slackID") || "");
		Hackatime.set(localStorage.getItem("Hackatime") || "");
	});
</script>

<div class="flex h-full items-center justify-center">
	<div>
		{#if $slackID == "" || $Hackatime == ""}
			<NoKey />
		{/if}
	</div>
</div>
