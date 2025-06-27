<script>
	import { showSetings } from "$lib/modules/setings/showStore.js";
	import { slackID, Hackatime } from "$lib/store.js";
	import toast from "svelte-5-french-toast";

	let tempSlackID = $slackID;
	let tempHackatime = $Hackatime;

	function save() {
		if (tempSlackID.trim() === "" || tempHackatime.trim() === "") {
			toast.error("Please fill in all fields.");
			return;
		}

		slackID.set(tempSlackID);
		Hackatime.set(tempHackatime);

		localStorage.setItem("slackID", tempSlackID);
		localStorage.setItem("Hackatime", tempHackatime);

		showSetings.set(false);

        toast.success("Settings saved successfully!");
	}
</script>

<div class="flex flex-col">
	<label for="slackID">Slack ID:</label>
	<input bind:value={tempSlackID} class="inp" id="slackID" type="text" placeholder="U*********" />
</div>

<div class="flex flex-col">
	<label for="Hackatime">Hackatime API Key:</label>
	<input
		bind:value={tempHackatime}
		class="inp"
		id="Hackatime"
		type="text"
		placeholder="****-**-**-**-********"
	/>
</div>

<div class="flex justify-evenly">
	<button class="btn red" onclick={() => showSetings.set(false)}>Cancel</button>
	<button class="btn green" onclick={save}>Save</button>
</div>
