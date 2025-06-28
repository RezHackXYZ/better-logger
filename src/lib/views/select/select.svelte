<script>
	import { slackID, selectedAppName, selectedHackatimeProjectName } from "$lib/store";
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

	async function selectedApp() {
		const response = await fetch(
			`https://corsproxy.io/?https://adventure-time.hackclub.dev/api/getAppUserHackatimeProjects?slackId=${$slackID}&appName=${localSelectedAppName}`,
		);
		const res = await response.json();
		HackatimeProjects = res.projects;
	}

	let localSelectedAppName = null;
	let localSelectedHackatimeProjectName = null;
</script>

{#if Apps != null}
	<div class="flex flex-col">
		<label for="app" class="text-black dark:text-white">Select a app!</label>
		<select
			class="inp"
			onchange={() => {
				selectedAppName.set(localSelectedAppName);
				selectedApp();
			}}
			bind:value={localSelectedAppName}
			id="app"
		>
			<option value={null} disabled selected>Select a app!</option>

			{#each Object.keys(Apps) as app}
				<option value={app}>{app}</option>
			{/each}
		</select>
	</div>

	{#if $selectedAppName != null}
		<div class="flex flex-col">
			<label for="hackatimeProject" class="text-black dark:text-white"
				>Select a Hackatime project for {$selectedAppName}!</label
			>
			<select
				class="inp"
				onchange={() => selectedHackatimeProjectName.set(localSelectedHackatimeProjectName)}
				bind:value={localSelectedHackatimeProjectName}
				id="hackatimeProject"
			>
				<option value={null} disabled selected>Select a Hackatime project!</option>

				{#each HackatimeProjects as project}
					<option value={project.name}>{project.name}</option>
				{/each}
			</select>
		</div>

		{#if $selectedHackatimeProjectName != null}
			<button class="btn green">Start Logging Time!</button>
		{/if}
	{/if}
{:else}
	<span class="text-black dark:text-white">loading...</span>
{/if}
