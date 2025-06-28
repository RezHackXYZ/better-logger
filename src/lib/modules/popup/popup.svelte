<script>
	export let showPopup = false;
</script>

{#if showPopup}
	<div
		class="fixed inset-0 z-10 flex flex-col items-center justify-center bg-gray-800/30 backdrop-blur-md dark:bg-gray-900/50"
	>
		<div
			class="flex flex-col gap-4 rounded border-2 border-gray-500 bg-gray-300 p-3 dark:border-gray-600 dark:bg-gray-800"
		>
			<slot />
		</div>
	</div>
{/if}
