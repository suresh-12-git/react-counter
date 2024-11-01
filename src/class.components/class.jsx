import { Component } from "react";




class Hi extends Component{

    constructor(){
        super();
        this.state={
            a:0
        }
        
    }

    mem=()=>{
        this.setState({
            a:this.state.a+1
        })
    }

    dec=()=>{
        this.setState({
            a:this.state.a-1
        })
    }


    render(){
  var a;


  if(this.state.a>0 && this.state.a<=5){
    var a=<h1 style={{color:"red"}}>{this.state.a}</h1>
  }
  else if ((this.state.a>5 && this.state.a<=10)){
    var a=<h1 style={{color:"green"}}>{this.state.a}</h1>
  }
  else{
    var a=<h1 style={{color:"blue"}}>{this.state.a}</h1>
  }

        return(
            <>
            
            <h1>Counter</h1>
            <button onClick={this.mem}>Increment</button>
            {a}
            <button onClick={this.dec}>Decrement</button>
            </>
        )
    }
}
export default Hi;