let initialState = {
  test: "test reducer",
  name: "ok",
};

export function initReduser(state = initialState, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, name: action.payload };
  }
  return state;
}

export const setBntName = (name) => {
  return {
    type: "INIT",
    payload: name,
  };
};
