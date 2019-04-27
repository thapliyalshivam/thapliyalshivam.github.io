const redux = require("redux");
const create_store = redux.createStore;

const inti_state={counter:0};

const reducer = (state = inti_state,action)=>{

if(action.type=="INCR")
return{...state,ctr:state.ctr+1};
return state;
};


const store = create_store(reducer);
console.log(store.getState());


store.dispatch({type:"INCR",value:10})
console.log(store.getState());
