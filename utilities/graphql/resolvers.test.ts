import { resolvers } from "./resolvers";

describe("resolvers", () => {
  it("loads basic resolver", async () => {
    const limit = 10;
    const result = resolvers.Query.widgets({ limit });
    await expect(result).resolves.toBeTruthy();
    expect(Array.from(await result)).toHaveLength(limit);
  });
});
