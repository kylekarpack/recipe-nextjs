import faker from "faker";
import { Widget } from "utilities/types";

export const generateWidget = (): Widget => {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    cost: Number(faker.commerce.price(100, 500, 2)),
    salePrice: Number(faker.commerce.price(500, 1500, 2)),
    quantity: faker.datatype.number(1000)
  };
};

export function* generateWidgets(limit: number): IterableIterator<Widget> {
  let i = 0;
  while (i < limit) {
    yield generateWidget();
    i++;
  }
}

export function generateWidgetArray(limit: number): Widget[] {
  return Array.from(generateWidgets(limit));
}
