<script>
	import { showSetings } from "../setings/showStore.js";
</script>

<div class="flex flex-col gap-3 p-5 px-10">
	<div class="flex items-center justify-between px-5 text-4xl">
		<div class="flex flex-col gap-1">
			<span> a better adventure time logger </span>
			<span class="text-lg text-gray-600">
				(only useable with neighborhood projects for now)

				<!-- 
				made by

				<a href="https://rezhack.xyz" target="_blank" class="text-blue-600 underline"> RezHackXYZ </a>
				-->
			</span>
		</div>

		<button
			aria-label="open settings"
			on:click={() => showSetings.set(true)}
			class="cursor-pointer transition-transform hover:scale-110"
		>
			<i class="nf nf-cod-settings_gear"></i>
		</button>
	</div>

	<div class="h-1 rounded-full bg-gray-200"></div>
</div>
