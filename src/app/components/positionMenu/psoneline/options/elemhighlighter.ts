export const elementHighLighter = (elm: any) => {
  switch (elm.type) {
    case "CUSTOM_TEXT":
      return { text: "Custom text", color: "#afd7af" };
    case "SYMBOL":
      return { text: `Symbol ${elm.sequences}`, color: "#afafff" };
    case "FUNCTION":
      return { text: elm.sequences, color: "#5fd7d7" };
    case "SPACE":
      return { text: "Space", color: "#5fffaf" };
    case "SEQUENCES":
      return { text: elm.sequences, color: "#5fafd7" };
  }
};
