import { Heading, Stack } from "@chakra-ui/react";
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
				<Link to="/daily/category/study">学習内容</Link>
			</HoverLink>
			<HoverLink>
				<Link to="/daily/category/want">やりたいこと</Link>
			</HoverLink>
			<HoverLink>
				<Link to="/daily/category/learning_time">勉強時間</Link>
			</HoverLink>
		</Stack>
	);
};
