import { Box, CircularProgress, VStack } from "@chakra-ui/react";

export const LoadingIcon = () => {
	return (
		<VStack>
			<Box>
				<CircularProgress
					size="60px"
					thickness="6px"
					isIndeterminate
					color="blue.300"
				/>
			</Box>
			<Box>loading...</Box>
		</VStack>
	);
};
