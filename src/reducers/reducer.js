
const inti_state={ctr:11,isMenuOn:false};


const reducer = (state = inti_state,action)=>{

console.log("dammm");
    if(action.type==="INCR"){
    return{ctr:state.ctr+action.value};}
    return state;
    };
    
export default reducer;