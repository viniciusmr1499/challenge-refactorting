import { Order } from "./Order";
import { Item } from "./Item";

test("Deve criar um pedido com cpf válido", () => {
  const order = new Order("226.582.070-93");
  order.create(new Item(2400, "notebook pro", 1));
  const items = order.getItems();
  expect(items.length > 0).toBeTruthy();
  expect(items[0].description).toEqual("notebook pro");
});

test("Não Deve criar um pedido com cpf inválido", () => {
  expect(() => new Order("1111111111")).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)", () => {
  const order = new Order("226.582.070-93");
  order.create(new Item(1000, "smartphone", 1));
  order.create(new Item(1000, "iphone", 1));
  order.addDiscount(10);
  expect(order.total).toBe(1800);
});
