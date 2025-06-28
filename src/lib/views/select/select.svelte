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

	let selectedHackatimeProjectName = null;
</script>

{#if Apps != null}
	<div class="flex flex-col">
		<label for="app" class="text-black dark:text-white">Select a app!</label>
		<select class="inp" onchange={selectedApp} bind:value={selectedAppName} id="app">
			<option value={null} disabled selected>Select a app!</option>

			{#each Object.keys(Apps) as app}
				<option value={app}>{app}</option>
			{/each}
		</select>
	</div>

	{#if selectedAppName != null}
		<div class="flex flex-col">
			<label for="hackatimeProject" class="text-black dark:text-white"
				>Select a Hackatime project for {selectedAppName}!</label
			>
			<select class="inp" bind:value={selectedHackatimeProjectName} id="hackatimeProject">
				<option value={null} disabled selected>Select a Hackatime project!</option>

				{#each HackatimeProjects as project}
					<option value={project.name}>{project.name}</option>
				{/each}
			</select>
		</div>

		{#if selectedHackatimeProjectName != null}
			<button class="btn green">Start Logging Time!</button>
		{/if}
	{/if}
{:else}
	<span class="text-black dark:text-white">loading...</span>
{/if}
