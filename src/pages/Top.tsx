import { Box, Heading, Text } from "@chakra-ui/react";

export const Top = () => {
	return (
		<Box textAlign="center">
			<Heading mb={7}>mameのポートフォリオ</Heading>
			<Box color="gray" bg="white" boxShadow="md" rounded="xl">
				<Text p={4} color="gray.500">
					こんにちは。自分のポートフォリオサイトを作りたい！学習記録も載せたい！ということで作ってみました。
					<br />
					このサイトを色々いじってプログラミングを楽しんでいきます。
					<br />
					mameってこんなことやってるっていうのも伝われば良いな～。
				</Text>
			</Box>
		</Box>
	);
};
