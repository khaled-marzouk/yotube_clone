import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchApi";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChanelDetail = () => {
	const [videos, setVideos] = useState([]);
	const [channelDetail, setChannelDetail] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelsId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);
	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						background:
							"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",

						zIndex: 10,
						height: "300px",
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop="-110px" />
			</Box>
			<Box display="flex" p="2">
				<Box sx={{ mr: { sm: "100px" } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChanelDetail;
