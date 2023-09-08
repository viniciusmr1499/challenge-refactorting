import { validateCpf } from "./CPF";
import { Item } from "./Item";

export class Order {
  items: Array<Item> = [];
  total = 0;

  constructor(cpf: string) {
    if (!validateCpf(cpf)) throw new Error("Invalid CPF");
  }

  create(item: Item) {
    this.items.push(item);
  }

  addDiscount(percentage: number) {
    const calculateItems = this.items.reduce((accumulator, item) => {
      accumulator += item.price;
      return accumulator;
    }, 0);
    const discountValue = (percentage / 100) * calculateItems;
    this.total = calculateItems - discountValue;
  }

  getItems() {
    return this.items;
  }
}
