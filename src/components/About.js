import React from "react"
import User from "./User"
import Userclass from "./Userclass"
class About extends React.Component{
      constructor(props){
        super(props)
        // console.log("Parent constructor");
      }

componentDidMount(){
    // console.log("parent componentdidmount");
}

    render(){
        // console.log("Parent render");
        return(
            <div>
                {/* <Userclass name={"first"}/> */}
                <User/>
                

            </div>
        )
    }
}
export default About