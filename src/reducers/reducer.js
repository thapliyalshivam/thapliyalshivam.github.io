
const inti_state={ctr:11,isMenuOn:false,heading:"new"};


const reducer = (state = inti_state,action)=>{

console.log("dammm");
    if(action.type==="INCR"){
    return{ctr:state.ctr+action.value};}


    if(action.type==="HEAD"){
        return{heading:action.value+"nee"};
    }

    return state;
    };

    
    
export default reducer;