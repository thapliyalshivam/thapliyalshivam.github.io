

//import {connect} from 'react-redux';
var updateCarousel = (id) => (dispatch, getState) => {


    const state = getState();

    const populate = state.images.filter(a=>a.id==id)[0];
    dispatch({type:"CAROUSELSET",data:populate});
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  
  export default updateCarousel;