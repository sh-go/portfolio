const toJson = async (res: Response) => {
	const json = await res.json();
	if (res.ok) {
		return json;
	} else {
		throw new Error(json.message);
	}
};

export const getDaily = async () => {
	const res = await fetch("https://mameportfolio.herokuapp.com/daily/", {
		method: "GET",
	});
	return await toJson(res);
};

export const getDailyDetail = async (id?: string) => {
	const res = await fetch(
		`https://mameportfolio.herokuapp.com/daily/${id}/`,
		{
			method: "GET",
		}
	);
	return await toJson(res);
};

export const getCategory = async (cat?: string) => {
	const res = await fetch(
		`https://mameportfolio.herokuapp.com/daily/${cat}/`,
		{
			method: "GET",
		}
	);
	return await toJson(res);
};
