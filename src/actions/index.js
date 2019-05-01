

//import {connect} from 'react-redux';
var song = (yo,boy) => (dispatch, getState) => {
    console.log("HEAD")
    dispatch({type:"HEAD",value:yo+"nee"});
  };
  
  export default song;