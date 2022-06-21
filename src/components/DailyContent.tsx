import { Box, HStack, Stack } from "@chakra-ui/react";
import { FC } from "react";
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
								{study}
							</Box>
							<Box
								w="230px"
								whiteSpace="nowrap"
								overflow="hidden"
								textOverflow="ellipsis"
							>
								{want}
							</Box>
						</Stack>
					</HStack>
				</TopListCard>
			</Link>
		</>
	);
};
