export function onIncrement(step) {
    return {
        type:"INC",
        step
    }
}

export function onDecrement(step) {
    return {
        type:"DEC",
        step
    }
}

export function CallIncrement(step) {
    return(dispatch) => {
        setTimeout(() => {
            dispatch(onIncrement(step));
        }, 3000)
    }
}