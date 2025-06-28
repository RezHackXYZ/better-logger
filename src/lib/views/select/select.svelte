<script>
	import { slackID } from "$lib/store";
	import { onMount } from "svelte";

	let Apps = null;
	let HackatimeProjects = null;

	onMount(async () => {
		const response = await fetch(
			`https://corsproxy.io/?https://adventure-time.hackclub.dev/api/getUnloggedTimeForUser?slackId=${$slackID}`,
		);
		const res = await response.json();
		Apps = res.apps;
	});

	let selectedAppName = null;

	async function selectedApp(selectedAppName) {
		const response = await fetch(
			`https://corsproxy.io/?https://adventure-time.hackclub.dev/api/getAppUserHackatimeProjects?slackId=${$slackID}&appName=${selectedAppName.target ? selectedAppName.target.value : selectedAppName}`,
		);
		const res = await response.json();
		HackatimeProjects = res.projects;
	}
</script>

{#if Apps != null}
	<div class="flex flex-col">
		<label for="app">Select a app!</label>
		<select class="inp" onchange={selectedApp} bind:value={selectedAppName} id="app">
			<option value={null} disabled selected>Select a app!</option>

			{#each Object.keys(Apps) as app}
				<option value={app}>{app}</option>
			{/each}
		</select>
	</div>

	{#if selectedAppName != null}
		<div class="flex flex-col">
			<label for="app">Select a Hackatime project for {selectedAppName}!</label>
			<select class="inp" onchange={selectedApp} bind:value={selectedAppName} id="app">
				<option value={null} disabled selected>Select a app!</option>

				{#each HackatimeProjects as project}
					<option value={project.name}>{project.name}</option>
				{/each}
			</select>
		</div>
	{/if}
{:else}
	loading...
{/if}
