type Arg = string | boolean | number | null | undefined;

const cls = (blockName: string, ...args: Arg[]) => {
  const classList: string[] = [];

  return args.reduce<string>((acc, cur) => {
    if (!cur) {
      return acc;
    }

    if (typeof cur !== "string") {
      return acc;
    }

    if (cur.startsWith("__")) {
      classList.push(cur);
      acc += cur;

      return acc;
    }

    if (cur.startsWith("--")) {
      acc += " " + blockName + classList.join("") + cur;

      return acc;
    }

    acc += " " + cur;

    return acc;
  }, blockName);
};

export const bem = (blockName: string) => {
  return (...args: Arg[]) => cls(blockName, ...args);
};
