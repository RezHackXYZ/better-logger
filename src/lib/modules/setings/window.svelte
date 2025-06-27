<script>
	import { showSetings } from "$lib/modules/setings/showStore.js";
    import { slackID, Hackatime } from "$lib/store.js";

    let tempSlackID = $slackID;
    let tempHackatime = $Hackatime;

    function save() {
        slackID.set(tempSlackID);
        Hackatime.set(tempHackatime);

        localStorage.setItem("slackID", tempSlackID);
        localStorage.setItem("Hackatime", tempHackatime);

        showSetings.set(false);
    }
</script>

<div class="flex flex-col">
	<label for="slackID">Slack ID:</label>
	<input bind:value={tempSlackID} class="inp" id="slackID" type="text" placeholder="U*********" />
</div>

<div class="flex flex-col">
	<label for="Hackatime">Hackatime API Key:</label>
	<input bind:value={tempHackatime} class="inp" id="Hackatime" type="text" placeholder="****-**-**-**-********" />
</div>

<div class="flex justify-evenly">
	<button class="btn red" onclick={() => showSetings.set(false)}>Cancel</button>
	<button class="btn green" onclick={save}>Save</button>
</div>
