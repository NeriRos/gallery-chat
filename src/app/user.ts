export interface User {
	id: string;
	username: string;
	fullname: string;
}

export const getUser = (): User => {
	const id = Math.round(Math.random() * 4);
	return {
		id: id.toString(),
		fullname: ["Neri", "Josh", "Erica", "Michael", "Donna"].at(id) || "Test",
		username:
			[
				"neri.coder",
				"josh.doe",
				"erica.the.queen",
				"michael.jackson",
				"donna.primadona",
			].at(id) || "test.user",
	};
};
