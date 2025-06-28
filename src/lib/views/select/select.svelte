<script>
	import { slackID } from "$lib/store";

	//sendHeartbeat

	fetch(`https://adventure-time.hackclub.dev/api/getUnloggedTimeForUser?slackId=${$slackID}`)
		.then((res) => res.json())
		.catch((err) => {
			console.error("Error fetching apps:", err);
		});
</script>

Select a app:
<select name="" id="">
	{#each res as}
		<option value=""></option>
	{/each}</select
>
