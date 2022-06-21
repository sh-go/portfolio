import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const ListCard: FC<Props> = (props) => {
	const { children } = props;

	return (
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
	);
};
