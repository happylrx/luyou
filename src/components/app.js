import React from "react"
import Header from './header.js'
import Footer from './footer.js'
import { Link } from 'react-router';

class App extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Header/>
        <Link to='/'>主页</Link><br/>
        <Link to='/login'>登录</Link>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}


export default App
