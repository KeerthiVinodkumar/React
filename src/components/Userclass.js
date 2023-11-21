import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo:{
        login:"dummy"
      }
    };
   console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
   console.log(this.props.name + "child componentdidmouont");
 
     const data = await fetch("https://api.github.com/users/keerthivinodkumar")
     const json = await data.json()

     this.setState({
        userinfo:json
     })
     console.log(json);
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.userinfo!==prevState.userinfo){
      const data =    fetch(this.state.userinfo)
      console.log(data);
    }
    

  }
  componentWillUnmount(){
    console.log("componentwillunmount");
  }
  render() {
    console.log(this.props.name + "child render");
  
    const {login,avatar_url}= this.state.userinfo
   
    return (

      <div className="user_card">
    
        <img src={avatar_url}></img>
        <h1>Name:{login}</h1>
        <h2>Location:Anantapur</h2>
        <h3>age:23</h3>
      </div>
    );
  }
}
export default Userclass;



/*
* constructor(dummy)
* Render(dummy)
* child userclass
*
*
*

*/
