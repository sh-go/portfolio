import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import MediaQuery from "react-responsive";

import { getDailyDetail } from "../api/getDaily";
import { CategoryListCard } from "./CategoryListCard";
import { ListCard } from "./ListCard";
import { LoadingIcon } from "./LoadingIcon";

export const DailyDetail = () => {
	const initState = {
		date: "",
		study: "",
		want: "",
		learning_time: "",
		link: "",
	};
	const [detail, setDetail] = useState(initState);
	const [loading, setLoading] = useState(true);
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		getDailyDetail(id)
			.then((d) => {
				setDetail(d);
				setLoading(false);
			})
			.catch((e) => {
				throw Error(e);
			});
	}, [id]);

	return (
		<Box>
			{loading ? (
				<Center w="1130px" h="400px">
					<LoadingIcon />
				</Center>
			) : (
				<>
					<Heading mb={7}>学習ログ</Heading>
					<ListCard>
						<Heading mb={7}>{detail.date}</Heading>
						<Stack gap={5}>
							<Box>
								<Heading fontSize="xl" mb={3}>
									学習内容
								</Heading>
								<ReactMarkdown
									components={ChakraUIRenderer()}
									skipHtml
								>
									{detail.study}
								</ReactMarkdown>
							</Box>
							<Box>
								<Heading fontSize="xl" mb={3}>
									やりたいこと
								</Heading>
								<ReactMarkdown
									components={ChakraUIRenderer()}
									skipHtml
								>
									{detail.want}
								</ReactMarkdown>
							</Box>
							<Box>
								<Heading fontSize="xl" mb={3}>
									リンク集
								</Heading>
								<ReactMarkdown
									components={ChakraUIRenderer()}
									skipHtml
								>
									{detail.link}
								</ReactMarkdown>
							</Box>
						</Stack>
					</ListCard>
					<MediaQuery minWidth="767px">
						<CategoryListCard />
					</MediaQuery>
				</>
			)}
		</Box>
	);
};
