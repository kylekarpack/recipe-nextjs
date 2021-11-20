import { generateWidgets } from "utilities/data/generateWidget";
import { Widget } from "utilities/types";

export const resolvers = {
  Query: {
    widgets: async ({ limit = 10 } = {}): Promise<Iterable<Widget>> => {
      // Random delay
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));

      // Generate some random data
      return generateWidgets(limit);
    }
  }
};
