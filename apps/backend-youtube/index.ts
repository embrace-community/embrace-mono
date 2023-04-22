import { google } from "googleapis";

// Replace with your own values
const CHANNEL_ID = "";
const API_KEY = "";

// Set up API client
const youtube = google.youtube({
	version: "v3",
	auth: API_KEY
});

// Retrieve all video IDs
const getVideoIds = async (nextPageToken?: string): Promise<string[]> => {
	const searchResponse = await youtube.search.list({
		part: "id",
		// part: "snippet,contentDetails,statistics",
		channelId: CHANNEL_ID,
		type: "video",
		maxResults: 50,
		pageToken: nextPageToken
	});
	const videoIds =
		searchResponse.data.items
			?.map((item) => item.id?.videoId)
			.filter(Boolean) ?? [];
	const nextPage = searchResponse.data.nextPageToken;
	return nextPage ? [...videoIds, ...(await getVideoIds(nextPage))] : videoIds;
};
const videoIds = await getVideoIds();

// Retrieve video metadata
const videos = await youtube.videos
	.list({
		part: "snippet",
		id: videoIds.join(",")
	})
	.then((response) => response.data.items ?? []);

// Print video titles
for (const video of videos) {
	console.log(video.snippet?.title);
}
