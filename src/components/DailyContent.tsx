import { Box, HStack, Stack } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { TopListCard } from "./TopListCard";

type Props = {
	id: string;
	date: string;
	study: string;
	want: string;
	learning_time: string;
	evaluation: string;
};

export const DailyContent: FC<Props> = (props) => {
	const { id, date, study, want, evaluation } = props;

	return (
		<>
			<Link to={`/daily/${id}`}>
				<TopListCard>
					<HStack textAlign="justify" gap={5} fontWeight="semibold">
						<Stack>
							<Box>{date}</Box>
							<Box>{evaluation}</Box>
						</Stack>
						<Stack>
							<Box
								w="230px"
								whiteSpace="nowrap"
								overflow="hidden"
								textOverflow="ellipsis"
							>
								<ReactMarkdown
									components={ChakraUIRenderer()}
									skipHtml
								>
									{study}
								</ReactMarkdown>
							</Box>
						</Stack>
					</HStack>
				</TopListCard>
			</Link>
		</>
	);
};
