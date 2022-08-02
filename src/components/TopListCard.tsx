import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import MediaQuery from "react-responsive";

type Props = {
	children: ReactNode;
};

export const TopListCard: FC<Props> = (props) => {
	const { children } = props;

	return (
		<>
			<MediaQuery query="(max-width:767px)">
				<Button
					w="22em"
					h="auto"
					p={5}
					mb={6}
					color="gray"
					bg="white"
					rounded="lg"
					boxShadow="xl"
					_hover={{
						cursor: "pointer",
						opacity: 0.8,
						transition: "0.2s",
					}}
				>
					{children}
				</Button>
			</MediaQuery>

			<MediaQuery query="(min-width:767px)">
				<Button
					w="sm"
					h="auto"
					p={5}
					mx={3}
					mb={6}
					color="gray"
					bg="white"
					rounded="lg"
					boxShadow="xl"
					_hover={{
						cursor: "pointer",
						opacity: 0.8,
						transition: "0.2s",
					}}
				>
					{children}
				</Button>
			</MediaQuery>
		</>
	);
};
