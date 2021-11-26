import { removeStepNumber } from "./string";

describe("string tests", () => {
  describe("step number tests", () => {
    it("works empty", () => {
      expect(removeStepNumber(null)).toBe("");
      expect(removeStepNumber("")).toBe("");
    });

    it("works with no step numbers", () => {
      expect(removeStepNumber("this is a step")).toBe("this is a step");
      expect(removeStepNumber("this is 1 step")).toBe("this is 1 step");
      expect(removeStepNumber("this is 1. step")).toBe("this is 1. step");
    });

    it("removes raw step numbers", () => {
      expect(removeStepNumber("1. step")).toBe("step");
      expect(removeStepNumber("2. step")).toBe("step");
      expect(removeStepNumber("999. step")).toBe("step");
    });

    it("removes html step numbers", () => {
      expect(removeStepNumber("<p>1. step")).toBe("step");
      expect(removeStepNumber("<p> 1. step")).toBe("step");
      expect(removeStepNumber("<p><strong>1.</strong> step")).toBe("step");
      expect(removeStepNumber("<p><strong> 1.</strong> step")).toBe("step");
      expect(removeStepNumber("<p>999. step")).toBe("step");
    });
  });
});
