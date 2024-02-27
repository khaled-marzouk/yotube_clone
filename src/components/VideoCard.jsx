import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, Card, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
	demoChannelTitle,
	demoChannelUrl,
} from "../utils/constatnt";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card
			sx={{
				width: { xs: "358px", sm: "358px", md: "320px" },
				borderRadius: 0,
				boxShadow: "none",
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{ width: 358, height: 180 }}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link
					to={
						snippet?.channelId
							? `/channel/${snippet?.channelId}`
							: demoChannelUrl
					}
				>
					<Typography variant="subtitle2" fontWeight="bold" color="gray">
						{snippet?.channeltitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
