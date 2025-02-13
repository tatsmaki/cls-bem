import { bem } from "./main";

test("Block", () => {
  const cls = bem("block");

  expect(cls()).toBe("block");
});

test("Block modifiers", () => {
  const cls = bem("block");

  expect(cls("--modifier")).toBe("block block--modifier");
  expect(cls(true && "--modifier")).toBe("block block--modifier");
  expect(cls(1 && "--modifier")).toBe("block block--modifier");

  expect(cls(false && "--modifier")).toBe("block");
  expect(cls(0 && "--modifier")).toBe("block");
});

test("Element", () => {
  const cls = bem("block");

  expect(cls("__element")).toBe("block__element");
});

test("Element modifiers", () => {
  const cls = bem("block");

  expect(cls("__element", "--modifier")).toBe("block__element block__element--modifier");
  expect(cls("__element", true && "--modifier")).toBe("block__element block__element--modifier");
  expect(cls("__element", 1 && "--modifier")).toBe("block__element block__element--modifier");

  expect(cls("__element", false && "--modifier")).toBe("block__element");
  expect(cls("__element", 0 && "--modifier")).toBe("block__element");
});

test("Nested elements", () => {
  const cls = bem("block");

  expect(cls("__element1", "__element2")).toBe("block__element1__element2");
  expect(cls("__element1", "__element2", "__element3")).toBe("block__element1__element2__element3");
});

test("Multiple modifiers", () => {
  const cls = bem("block");

  expect(cls("--modifier1", "--modifier2")).toBe("block block--modifier1 block--modifier2");
  expect(cls("--modifier1", "--modifier2", "--modifier3")).toBe(
    "block block--modifier1 block--modifier2 block--modifier3"
  );
});

test("Additional class names", () => {
  const cls = bem("block");

  expect(cls("class")).toBe("block class");
  expect(cls("class1", "class2")).toBe("block class1 class2");
});
