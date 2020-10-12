export const elementHighLighter = (elm) => {
  switch (elm.type) {
    case "SYMBOL":
      return { text: `Symbol ${elm.sequences}`, color: "#acb0f8" };
    case "FUNCTION":
      return { text: elm.sequences, color: "#2dafaa" };
    case "SPACE":
      return { text: "Space", color: "#0d74db" };
    case "SEQUENCES":
      return { text: elm.sequences, color: "#e9e9e9" };
  }
};
