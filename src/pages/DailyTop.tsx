import { Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

import { getDaily } from "../api/getDaily";
import { CategoryListCard } from "../components/CategoryListCard";
import { DailyContent } from "../components/DailyContent";

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
	const [loading, setLoading] = useState(false);

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
				<Spinner
					thickness="4px"
					speed="1.0s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
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
