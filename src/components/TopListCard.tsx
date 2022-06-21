import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const TopListCard: FC<Props> = (props) => {
	const { children } = props;

	return (
		<Box
			as="button"
			w="sm"
			h="auto"
			p={5}
			mx={3}
			mb={6}
			color="gray"
			bg="white"
			rounded="lg"
			boxShadow="xl"
			_hover={{ cursor: "pointer", opacity: 0.8, transition: "0.2s" }}
		>
			{children}
		</Box>
	);
};
