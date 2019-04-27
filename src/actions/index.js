

//import {connect} from 'react-redux';
var song = (yo,boy) => (dispatch, getState) => {
    console.log("sugar")
    dispatch({type:"INCR",value:2});
  };
  
  export default song;