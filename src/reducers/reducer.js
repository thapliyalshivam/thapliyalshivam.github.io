
const inti_state = { iscarouselon: false,carousel:{},ctr: 11, isMenuOn: false, heading: "new", images:[] };


const reducer = (state = inti_state, action) => {

    
    if (action.type === "INCR") {
        return {
            ...state, ctr: state.ctr + action.value
        };
    }

    if (action.type === "CAROUSELSET") {
        return {
            ...state, carousel: action.data, iscarouselon:true
        };
    }

    if (action.type === "DATAPOPULATE") {
 
        console.log("newwwwwwww")
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