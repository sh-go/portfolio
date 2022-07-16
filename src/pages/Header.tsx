import {
	Box,
	Heading,
	HStack,
	Spacer,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Box bg="teal.600">
			<HStack p={5} mb={10} mr={9}>
				<Heading fontSize={{ base: "md", md: "lg" }}>
					<Link to="/">mameのポートフォリオ</Link>
				</Heading>
				<Spacer />
				<HStack gap={5}>
					<Heading
						fontSize={{ base: "sm", md: "md" }}
						_hover={{ opacity: 0.8 }}
					>
						<Link to="/daily">mameの学習ログ</Link>
					</Heading>
					<Heading
						fontSize={{ base: "sm", md: "md" }}
						_hover={{ opacity: 0.8 }}
					>
						<ChakraLink
							href="https://caluq.herokuapp.com/login"
							isExternal
							_hover={{}}
						>
							CALUQ
						</ChakraLink>
					</Heading>
				</HStack>
			</HStack>
		</Box>
	);
};
