

//import {connect} from 'react-redux';
var updateCarousel = (id) => (dispatch, getState) => {
    console.log(getState());
    dispatch({type:"HEAD",value:"nee"});
  };
  
  export default updateCarousel;