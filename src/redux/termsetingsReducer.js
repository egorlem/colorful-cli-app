let initialState = {
  term: "xterm",
  colors: {
    red: {
      normal: {
        ansi: {
          fg: 31,
          bg: 41,
        },
        rgb: "rgb(205, 0, 0)",
      },
      bright: {
        ansi: {
          fg: 91,
          bg: 101,
        },
        rgb: "rgb(255, 0, 0)",
      },
    },
    green: {
      normal: {
        ansi: {
          fg: 32,
          bg: 42,
        },
        rgb: "rgb(0, 205, 0)",
      },
      bright: {
        ansi: {
          fg: 92,
          bg: 102,
        },
        rgb: "rgb(0, 255, 0)",
      },
    },
    blue: {
      normal: {
        ansi: {
          fg: 34,
          bg: 44,
        },
        rgb: "rgb(0, 0, 205)",
      },
      bright: {
        ansi: {
          fg: 94,
          bg: 104,
        },
        rgb: "rgb(0, 0, 255)",
      },
    },
    yellow: {
      normal: {
        ansi: {
          fg: 33,
          bg: 43,
        },
        rgb: "rgb(205, 205, 0)",
      },
      bright: {
        ansi: {
          fg: 93,
          bg: 103,
        },
        rgb: "rgb(255, 255, 0)",
      },
    },
    magenta: {
      normal: {
        ansi: {
          fg: 35,
          bg: 45,
        },
        rgb: "rgb(205, 0, 205)",
      },
      bright: {
        ansi: {
          fg: 95,
          bg: 105,
        },
        rgb: "rgb(255, 0, 255)",
      },
    },
    cyan: {
      normal: {
        ansi: {
          fg: 36,
          bg: 46,
        },
        rgb: "rgb(0, 205, 205)",
      },
      bright: {
        ansi: {
          fg: 96,
          bg: 106,
        },
        rgb: "rgb(0, 255, 255)",
      },
    },
    black: {
      normal: {
        ansi: {
          fg: 30,
          bg: 40,
        },
        rgb: "rgb(0, 0, 0)",
      },
      bright: {
        ansi: {
          fg: 90,
          bg: 100,
        },
        rgb: "rgb(127, 127, 127)",
      },
    },
    white: {
      normal: {
        ansi: {
          fg: 37,
          bg: 47,
        },
        rgb: "rgb(229, 229, 229)",
      },
      bright: {
        ansi: {
          fg: 97,
          bg: 107,
        },
        rgb: "rgb(255, 255, 255)",
      },
    },
  },
  font: {
    name: "Ubuntu Mono",
    typeface: "regular",
    size: "14px",
  },
};

export function termSetReducer(state = initialState, action) {
  switch (action.type) {
    case "INIT_OPTIONS":
      return { ...state };
  }
  return state;
}

export const initSetings = (name) => {
  return {
    type: "INIT_OPTIONS",
  };
};
