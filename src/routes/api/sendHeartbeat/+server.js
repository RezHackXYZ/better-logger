export function GET({ url }) {
	const token = url.searchParams.get("token");
	const file = url.searchParams.get("file");
	const project = url.searchParams.get("project");

	fetch("https://hackatime.hackclub.com/api/hackatime/v1/heartbeats", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			time: Date.now() / 1000,
			entity: file,
			project: project,
			type: "file",
		}),
	}).then((res) => {
		if (res.ok) {
			return new Response("Heartbeat sent successfully", {
				status: 200,
			});
		} else {
			return new Response("Failed to send heartbeat", {
				status: res.status,
			});
		}
	});
}
