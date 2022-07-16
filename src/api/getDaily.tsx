const toJson = async (res: Response) => {
	const json = await res.json();
	if (res.ok) {
		return json;
	} else {
		throw new Error(json.message);
	}
};

export const getDaily = async () => {
	const res = await fetch("https://portfolio-nu-lyart-32.vercel.app/daily", {
		method: "GET",
	});
	return await toJson(res);
};

export const getDailyDetail = async (id?: string) => {
	const res = await fetch(
		`https://portfolio-nu-lyart-32.vercel.app/daily/${id}`,
		{
			method: "GET",
		}
	);
	return await toJson(res);
};

export const getCategory = async (cat?: string) => {
	const res = await fetch(
		`https://portfolio-nu-lyart-32.vercel.app/daily/${cat}`,
		{
			method: "GET",
		}
	);
	return await toJson(res);
};
