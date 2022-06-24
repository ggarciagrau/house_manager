export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_PLATES":
            return { ...state, plates: payload };
            break;
        case "POST_PLATE":
            return { ...state, targetEntity: payload };
            break;
    }
}