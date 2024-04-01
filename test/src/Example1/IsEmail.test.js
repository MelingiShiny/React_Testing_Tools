import { isEmail } from "./isEmail";

test("Should return true when valid email", () => {
  const result = isEmail("bill@somewhere.com");
  expect(result).toBe(true);
});

test("Should return false when invalid email", () => {
  const result = isEmail("bill");
  expect(result).toBe(false);
});
