
const inti_state = { ctr: 11, isMenuOn: false, heading: "new", images:[] };


const reducer = (state = inti_state, action) => {

    console.log("_______reducer________");
    
    if (action.type === "INCR") {
        return {
            ...state, ctr: state.ctr + action.value
        };
    }

    if (action.type === "DATAPOPULATE") {
        return {
            ...state, 
            images: action.images
        };
    }

    if (action.type === "HEAD") {
        return {
            ...state,
            heading: action.value + "nee"
        };
    }

    return state;
};



export default reducer;