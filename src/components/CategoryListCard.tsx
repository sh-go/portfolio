import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { CategoryList } from "./CategoryList";

export const CategoryListCard: FC = () => {
	return (
		<Box pos="fixed" top="160px" right="40px">
			<CategoryList />
		</Box>
	);
};
