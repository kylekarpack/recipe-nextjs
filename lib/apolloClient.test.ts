import { initializeApollo, useApollo } from "./apolloClient";

jest.mock("react", () => ({
  useMemo: (): any => null
}));

describe("apollo client", () => {
  it("initializeApollo loads with no initial state", () => {
    const client = initializeApollo();
    expect(client).toBeDefined();
  });

  it("initializeApollo loads", () => {
    const client = initializeApollo({});
    expect(client).toBeDefined();
  });

  it("useApollo hook loads with no initial state", () => {
    const hook = (useApollo as any)();
    expect(hook).toBeDefined();
  });

  it("useApollo hook loads", () => {
    const hook = useApollo({});
    expect(hook).toBeDefined();
  });
});
