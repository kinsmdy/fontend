import { Component } from "react";
import profile from "./App";

export default class Card extends Component {
    render(){
        return(
            <>
        <div calssName="card">
        <div calssName="card-hrader">Onairiya Panaksri</div> <br />
        <div calssName="card-body">
          <img className ="round" src = {this.props.profile} ait = "user"/>
          <h3>{this.props.name}</h3>
          <p>Section : 66/53</p> <br />
          <p>Mojor : Software Engineering</p> <br />
          <p>Farolty : Bachelor of Education</p> <br />
          <p>niversity : Nakhon Pathom Rajabhat</p> <br />
          <p>tel : 0928504298</p> <br />
        </div>
      </div>
    </>
  );
}     
}
