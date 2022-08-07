import { Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

import { getDaily } from "../api/getDaily";
import { CategoryListCard } from "../components/CategoryListCard";
import { DailyContent } from "../components/DailyContent";
import { LoadingIcon } from "../components/LoadingIcon";

export const DailyTop = () => {
	const initState = [
		{
			id: "",
			date: "",
			study: "",
			want: "",
			link: "",
			learning_time: "",
			evaluation: "",
		},
	];

	const [daily, setDaily] = useState(initState);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getDaily()
			.then((d) => {
				setDaily(d);
				setLoading(false);
			})
			.catch((e) => {
				throw new Error(e);
			});
	}, []);

	return (
		<>
			{loading ? (
				<Center w="1130px" h="400px">
					<LoadingIcon />
				</Center>
			) : (
				<>
					<Heading mb={7}>mameの学習ログ</Heading>
					{daily.map((d) => (
						<DailyContent
							id={d.id}
							date={d.date}
							study={d.study}
							want={d.want}
							learning_time={d.learning_time}
							evaluation={d.evaluation}
						/>
					))}
					<MediaQuery query="(min-width:767px)">
						<CategoryListCard />
					</MediaQuery>
				</>
			)}
		</>
	);
};
