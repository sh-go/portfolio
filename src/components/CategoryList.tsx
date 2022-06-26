import { Box, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HoverLink } from "./HoverLink";

export const CategoryList = () => {
	return (
		<Stack
			color="gray"
			bg="white"
			w="200px"
			p={3}
			m={3}
			boxShadow="xl"
			rounded="lg"
		>
			<Heading fontSize="xl">カテゴリー</Heading>
			<HoverLink>
				<Box fontWeight="semibold">
					<Link to="/daily/category/study">学習内容</Link>
				</Box>
			</HoverLink>
			<HoverLink>
				<Box fontWeight="semibold">
					<Link to="/daily/category/want">やりたいこと</Link>
				</Box>
			</HoverLink>
			<HoverLink>
				<Box fontWeight="semibold">
					<Link to="/daily/category/link">参考になったリンク集</Link>
				</Box>
			</HoverLink>
		</Stack>
	);
};
