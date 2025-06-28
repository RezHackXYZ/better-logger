<script>
	import { onMount } from "svelte";
	import { slackID, Hackatime } from "$lib/store.js";
	import NoKey from "$lib/views/NoKey/NoKey.svelte";
	import Select from "$lib/views/select/select.svelte";

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
			<Select />
		{/if}
	</div>
</div>
