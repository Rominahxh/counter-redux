// The first action is increment.
// First we will return the type, type: is which type of action we would like to perform.
// This is the code for our action file.

export function Increment() {
    console.log(Increment)
    return {
        type: "INCREMENT"
    }
}

export function Decrement() {
    console.log(Decrement)
    return {
        type: "DECREMENT"
    }
}

