import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import { getCategory } from "../api/getDaily";
import { CategoryListCard } from "./CategoryListCard";
import { ListCard } from "./ListCard";

export const DailyCategoryView = () => {
	const initState = [
		{
			date: "",
			content: "",
		},
	];

	const [category, setCategory] = useState(initState);
	const [loading, setLoading] = useState(true);
	const { cat } = useParams<{ cat: string }>();

	useEffect(() => {
		getCategory(cat)
			.then((c) => {
				setCategory(c);
				setLoading(false);
			})
			.catch((e) => {
				throw Error(e);
			});
	}, [cat]);

	let title;

	if (cat === "study") {
		title = "学習内容";
	} else if (cat === "want") {
		title = "やりたいこと";
	}

	return (
		<Box>
			{loading ? (
				<Spinner
					thickness="4px"
					speed="1.0s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			) : (
				<>
					<Box>
						<Heading mb={7}>{title}</Heading>
						{category.map((c) => (
							<ListCard>
								<Heading fontSize="3xl">{c.date}</Heading>
								<Box mt={3}>
									<ReactMarkdown
										components={ChakraUIRenderer()}
										skipHtml
									>
										{c.content}
									</ReactMarkdown>
								</Box>
							</ListCard>
						))}
						<CategoryListCard />
					</Box>
				</>
			)}
		</Box>
	);
};
