

//import {connect} from 'react-redux';
var updateCarousel = (id) => (dispatch, getState) => {
    const state = getState();
    console.log(id);
    const populate = state.images.filter(a=>a.id==id)[0];
    console.log(populate);

    dispatch({type:"CAROUSELSET",data:populate});
  };
  
  export default updateCarousel;