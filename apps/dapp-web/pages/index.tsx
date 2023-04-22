import Link from "next/link";
import { useState } from "react";
import { Button } from "ui";

export default function Web() {
	const [username, setUsername] = useState("");
	const [channels, setChannels] = useState([]);

	async function onGetChannels() {
		if (!username) return;

		try {
			const channelListResponse = await fetch(
				`/api/youtube/channels?username=${username}`
			);
			const channelListResp = await channelListResponse.json();

			setChannels(channelListResp.data?.items || []);
		} catch (err: any) {
			console.error(err.message);
		}
	}

	return (
		<div className="p-4">
			<div className="mb-8">
				<div className="w-1/2 mb-4">
					<label
						htmlFor="username"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Username
					</label>

					<div className="mt-2">
						<input
							type="username"
							name="username"
							id="username"
							className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="caruso33"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
				</div>

				<Button
					variant="primary"
					size="large"
					label="Get Channel Ids"
					onClick={() => onGetChannels()}
				/>
			</div>

			<div>
				<h2 className="text-2xl mb-4">Channels</h2>

				<div className="flex">
					{channels.map((channel) => {
						return (
							<div key={channel.id} className="border rounded p-2">
								<span className="block">Title: {channel.snippet.title}</span>
								<span className="block">ID: {channel.id}</span>
								<span className="block">
									Subscribers: {channel.statistics.subscriberCount}
								</span>
								<span className="block">
									Views: {channel.statistics.viewCount}
								</span>
								<span className="block">
									Videos: {channel.statistics.videoCount}
								</span>
								<p>{channel.snippet.description}</p>

								<div className="py-2">
									<hr />
								</div>

								<Link
									className="btn"
									target="_blank"
									rel="noreferrer"
									href={`https://youtube.com/${channel.snippet.customUrl}`}
								>
									Visit Channel
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
