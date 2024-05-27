// The reducer transform our state tree by actions,
// it means it returns a new state.
// It takes two arguments, which means two parameters,
// one is the previous state and the second one is the action.

// Here we will use the switch statement.
// This is all for our counter reducer.
export function counterReducer(state = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }
}
