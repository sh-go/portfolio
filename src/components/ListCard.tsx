import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import MediaQuery from "react-responsive";

type Props = {
	children: ReactNode;
};

export const ListCard: FC<Props> = (props) => {
	const { children } = props;

	return (
		<>
			<MediaQuery minWidth="767px">
				<Box
					w="3xl"
					mb={4}
					p={3}
					color="gray"
					bg="white"
					rounded="lg"
					boxShadow="xl"
				>
					{children}
				</Box>
			</MediaQuery>

			<MediaQuery maxWidth="767px">
				<Box
					w="22em"
					mb={4}
					p={3}
					color="gray"
					bg="white"
					rounded="lg"
					boxShadow="xl"
				>
					{children}
				</Box>
			</MediaQuery>
		</>
	);
};
