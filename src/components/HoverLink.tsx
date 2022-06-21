import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const HoverLink: FC<Props> = (props) => {
	const { children } = props;

	return (
		<Box
			transition="0.3s"
			_hover={{
				transitionDuration: "0.4s",
				bg: "gray.500",
				color: "white",
				opacity: "0.8",
			}}
			w="fit-content"
			p={1}
			rounded="md"
			fontSize="sm"
		>
			{children}
		</Box>
	);
};
