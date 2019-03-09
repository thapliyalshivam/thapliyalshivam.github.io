import React, {Component} from "react";
import Button from "../Button"
import ReactDOM from "react-dom";
import Card from "../Card";

class Header extends Component{

constructor(){
    super();
    this.state = {
        project:"project"
    }
    this.stateFixer = this.stateFixer.bind(this);
}

stateFixer(newName){
    this.setState ( {
        project: newName || "Shivam Thapliyal"
    });
} 

  
render(){

return(
    <div>
<h1>This is {this.state.project}</h1> 

<Button   nameUpdation = {this.stateFixer}/> 
<Card/>
</div>
);

}


}

export default Header;