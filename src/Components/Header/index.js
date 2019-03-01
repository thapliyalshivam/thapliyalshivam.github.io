import React, {Component} from "react";
import Button from "../Button"
import ReactDOM from "react-dom";

class Header extends Component{

constructor(){
    super();
    this.state = {
        project:"Ayesha"
    }
    this.stateFixer = this.stateFixer.bind(this);
}

stateFixer(newName){
    this.setState ( {
        project: newName||"Ayesha"
    });
} 

  
render(){

return(
    <div>
<h1>This is {this.state.project}</h1> 
<Button   nameUpdation = {this.stateFixer}/> 
</div>
);

}


}

export default Header;