import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { Top } from "./pages/Top";
import { Header } from "./pages/Header";
import { DailyTop } from "./pages/DailyTop";
import { DailyDetail } from "./components/DailyDetail";
import { theme } from "./theme/theme";
import { DailyCategoryView } from "./components/DailyCategoryView";

export default function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Box mx="16">
					<Routes>
						<Route path="/" element={<Top />} />
						<Route path="/daily" element={<DailyTop />} />
						<Route path="/daily/:id" element={<DailyDetail />} />
						<Route
							path="/daily/category/:cat"
							element={<DailyCategoryView />}
						/>
						<Route path="/profile" />
						<Route path="*" />
					</Routes>
				</Box>
			</BrowserRouter>
		</ChakraProvider>
	);
}
