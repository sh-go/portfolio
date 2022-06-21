import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Box bg="teal.600">
			<HStack p={5} mb={10}>
				<Heading fontSize={{ base: "md", md: "lg" }}>
					<Link to="/">mameのポートフォリオ</Link>
				</Heading>
				<Spacer />
				<Heading fontSize={{ base: "sm", md: "md" }}>
					<Link to="/daily">mameの学習ログ</Link>
				</Heading>
			</HStack>
		</Box>
	);
};
