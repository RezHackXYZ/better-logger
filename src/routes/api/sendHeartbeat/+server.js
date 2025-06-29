export async function GET({ url }) {
	const token = url.searchParams.get("token");
	const file = url.searchParams.get("file");
	const project = url.searchParams.get("project");

	try {
		const res = await fetch(
			"https://hackatime.hackclub.com/api/hackatime/v1/users/current/heartbeats",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
					"User-Agent": "RezHackXYZ's time logger/1.0",
				},
				body: JSON.stringify({
					entity: file,
					type: "file",
					time: Math.floor(Date.now() / 1000),
					project: project,
					language: file,
					is_write: true,
				}),
			},
		);

		if (res.ok) {
			return new Response("Heartbeat sent successfully", {
				status: 200,
			});
		} else {
			const errorText = await res.text();
			console.log(`Hackatime API error: ${res.status} - ${errorText}`);
			return new Response(`Failed to send heartbeat: ${res.status} - ${errorText}`, {
				status: res.status,
			});
		}
	} catch (error) {
		return new Response("Error sending heartbeat", {
			status: 500,
		});
	}
}
