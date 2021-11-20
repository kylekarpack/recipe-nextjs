import { generateWidgets } from "./generateWidget";

describe("widget generator", () => {
	it("generates widgets", () => {
		const limit = 10;
		const widgets = generateWidgets(limit);
		expect(Array.from(widgets).length).toBe(limit);
	});
});