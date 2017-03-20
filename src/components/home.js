import React from "react"
import axios from 'axios';


class Home extends React.Component{
  constructor(){
    super();
    this.state={
      cats:[],
    }
  }
  componentWillMount(){
      axios.get("http://api.duopingshidai.com/category")
        .then((res)=>this.setState({cats:res.data.categories}))
        .catch(err=>console.log(err))
    }
  handleSubmit(e){
    e.preventDefault();
    const name=this.refs.name.value;
      axios.post(`http://api.duopingshidai.com/category`,{name}).then((res)=>{
        console.log(res);
        this.setState({cats:res.data.category.name})
     })
    }
    handledelete(_id){
      axios.delete(`http://api.duopingshidai.com/category?id=${_id}`).then( res =>console.log(res) )

    }
  render(){
    let catList = this.state.cats.map(item => <li key={Math.random()}>{item.name}<button onClick={this.handledelete.bind(this,item._id)}>删除</button></li>);
    return(
      <div>
        <h2>创建商品分类</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref="name"/>
        <input type="submit"/>
        </form>
        {catList}
      </div>
    )
  }
}


export default Home
