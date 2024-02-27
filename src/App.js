import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import {
	Navbar,
	Feed,
	VideoDetail,
	ChanelDetail,
	SearchFeed,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ background: "black" }}>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/video/:id" exact element={<VideoDetail />} />
					<Route path="/channel/:id" exact element={<ChanelDetail />} />
					<Route path="/search/:seatchTerm" exact element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;
