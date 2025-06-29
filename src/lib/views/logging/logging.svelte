<script>
	import {
		currentView,
		selectedAppName,
		selectedHackatimeProjectName,
		Hackatime,
	} from "$lib/store.js";
	import { onMount, onDestroy } from "svelte";

	let heartbeatInterval;
	let timeStarted = new Date();
	let elapsedTime = "00:00:00";
	let timeInterval;

	function goBackToMenu() {
		// Clear selections and go back to menu
		selectedAppName.set(null);
		selectedHackatimeProjectName.set(null);
		currentView.set("menu");
	}

	function startHeartbeat() {
		// Send heartbeat every 30 seconds
		heartbeatInterval = setInterval(async () => {
			try {
				const response = await fetch(
					`/api/sendHeartbeat?token=${$Hackatime}&file=${$selectedAppName}&project=${$selectedHackatimeProjectName}`,
				);
				if (response.ok) {
					console.log("Heartbeat sent successfully");
				} else {
					console.error("Failed to send heartbeat");
				}
			} catch (error) {
				console.error("Error sending heartbeat:", error);
			}
		}, 30000); // 30 seconds

		// Send initial heartbeat immediately
		fetch(
			`/api/sendHeartbeat?token=${$Hackatime}&file=${$selectedAppName}&project=${$selectedHackatimeProjectName}`,
		)
			.then((response) => {
				if (response.ok) {
					console.log("Initial heartbeat sent successfully");
				} else {
					console.error("Failed to send initial heartbeat");
				}
			})
			.catch((error) => {
				console.error("Error sending initial heartbeat:", error);
			});
	}

	function updateElapsedTime() {
		const now = new Date();
		const diff = now - timeStarted;

		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);

		const parts = [];
		if (hours > 0) parts.push(`${hours}h`);
		if (minutes > 0) parts.push(`${minutes}m`);
		if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);
		
		elapsedTime = parts.join(' ');
	}

	onMount(() => {
		startHeartbeat();

		timeInterval = setInterval(updateElapsedTime, 1000);
	});

	onDestroy(() => {
		if (heartbeatInterval) {
			clearInterval(heartbeatInterval);
		}
		if (timeInterval) {
			clearInterval(timeInterval);
		}
	});
</script>

<div class="mx-auto flex max-w-2xl flex-col gap-6 p-6">
	<div class="text-center">
		<h1 class="mb-2 text-3xl font-bold text-black dark:text-white">Currently Logging Time</h1>
		<div class="mb-4 font-mono text-6xl text-green-600 dark:text-green-400">
			{elapsedTime}
		</div>
	</div>

	<div
		class="rounded-lg border-2 border-gray-300 p-4 dark:border-gray-600"
	>
		<h2 class="mb-1 text-2xl font-semibold text-black dark:text-white">Current Session</h2>
		<div>
			<div class="flex justify-between">
				<span class="text-gray-600 dark:text-gray-400">App Name:</span>
				<span class="font-medium text-black dark:text-white">{$selectedAppName}</span>
			</div>
			<div class="flex justify-between">
				<span class="text-gray-600 dark:text-gray-400">Hackatime Project:</span>
				<span class="font-medium text-black dark:text-white">{$selectedHackatimeProjectName}</span>
			</div>
		</div>
	</div>

	<!-- Back Button -->
	<div class="text-center">
		<button class="btn red" onclick={goBackToMenu}>
			<i class="nf nf-cod-arrow_left"></i>
			Stop Logging
		</button>
	</div>
</div>
