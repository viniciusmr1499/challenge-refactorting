import { validateCpf } from "./CPF";

test("Deve validar um cpf válido", function () {
  const isValid = validateCpf("935.411.347-80");
  expect(isValid).toBeTruthy();
});

test("Deve validar um cpf inválido com todos os números iguais", function () {
  const isValid2 = validateCpf("111.111.111-11");
  expect(isValid2).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", function () {
  const isValid3 = validateCpf(null);
  expect(isValid3).toBeFalsy();
});
