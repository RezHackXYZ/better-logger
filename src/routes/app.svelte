<script>
	import { onMount } from "svelte";
	import { slackID, Hackatime, currentView } from "$lib/store.js";
	import NoKey from "$lib/views/NoKey/NoKey.svelte";
	import Select from "$lib/views/select/select.svelte";
	import Logging from "$lib/views/logging/logging.svelte";

	onMount(() => {
		slackID.set(localStorage.getItem("slackID") || "");
		Hackatime.set(localStorage.getItem("Hackatime") || "");
	});
</script>

<div class="flex h-full items-center justify-center">
	<div class="flex flex-col gap-4">
		{#if $slackID == "" || $Hackatime == ""}
			<NoKey />
		{:else if $slackID != null || $Hackatime != null}
			{#if $currentView == "logging"}
				<Logging />
			{:else}
				<Select />
			{/if}
		{/if}
	</div>
</div>
