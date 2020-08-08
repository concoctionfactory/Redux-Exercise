const INITIAL_STATE = { mood: "ɷ◡ɷ" };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setface":
      console.log("set");
      return { ...state, mood: action.payload };
  }
}

const store = Redux.createStore(rootReducer);
