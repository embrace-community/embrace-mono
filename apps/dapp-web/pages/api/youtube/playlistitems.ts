import type { NextApiRequest, NextApiResponse } from "next";
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import path from "path";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{
		success: boolean;
		data: Record<string, any> | null;
		message: string;
	}>
) {
	console.log("req.query", req.query);

	if (!req.query.playlistid) {
		return res.status(400).json({
			success: false,
			data: null,
			message: "Missing playlistid"
		});
	}

	const keyFile = path.join(process.cwd(), "/data/service_account_key.json");

	const auth = new JWT({
		keyFile,
		scopes: ["https://www.googleapis.com/auth/youtube.readonly"]
	});

	const youtube = google.youtube({ version: "v3", auth });
	try {
		const response = await youtube.playlistItems.list({
			// @ts-ignore
			playlistId: req.query.playlistid,
			part: "snippet,contentDetails",
			maxResults: 50
		});

		// @ts-ignore
		if (response.status !== 200) {
			return {
				success: false,
				data: null,
				message: "Failed to get playlists"
			};
		}

		// @ts-ignore
		const playlist = response.data?.items?.map((item) => item?.id) || [];

		console.log("playlist", playlist);

		res.status(200).json({
			success: true,
			// @ts-ignore
			data: response.data,
			message: ""
		});
	} catch (e: any) {
		console.error(e.message);
		res.status(500).json({
			success: false,
			data: null,
			message: e.message
		});
	}
}
