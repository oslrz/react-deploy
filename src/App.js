import Navbar from "./Navbar";
import React from "react";
import Field from "./Field";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_data:false
    }
  }
  NewSearchString = (data) =>{
    // if(data.length > 0){
      this.setState({search_data:data},()=>{
        this.forceUpdate()
      })
    // }else{
    //   this.setState({search:false},()=>{
    //     this.forceUpdate()
    //   })
    // }
    
  }
  render() {
    return (
      <div>
        <Navbar NewSearchString={this.NewSearchString} />
        <Field search = {this.state.search_data} />
      </div>
    );
  }
}

export default App;
