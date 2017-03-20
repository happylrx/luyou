import React from 'react';
import axios from 'axios';


class Home extends React.Component{
  constructor(){
    super();
    this.state={
      categories:[]
    }
  }
  componentWillMount(){
    this.getSubmit()
  }
  getSubmit(){
        axios.get("http://api.duopingshidai.com/category").then((res)=>
        {this.setState({categories:res.data.categories})
      }
    )
  }


  handleSubmit(e){
    e.preventDefault()
    console.log(this.refs.category);
    let category={name:this.refs.category.value};
    axios.post('http://api.duopingshidai.com/category', category).then(res => {
        this.getSubmit(),
        this.setState(this.refs.category.value='')
      })
      .catch(err => {
          if (err.response) {
              alert(err.response.data.msg)
          }
      })
    }
  handleClick(id){
    console.log(id);

    axios.delete(`http://api.duopingshidai.com/category?id=${id}`).then(
      res=>{console.log(res),
          this.getSubmit()
      }
    )
  }
  handleNewProduct(e){
    e.preventDefault();
    let goodsName=this.refs.goodsName.value;
    let goodsProfile=this.refs.goodsProfile.value;
    let goodsPrice=this.refs.goodsPrice.value;
    let goodsPic=this.refs.goodsPic.value;
    let goodsId=this.refs.goodsId.value;
    console.log({goodsName,goodsProfile,goodsPrice,goodsPic,goodsId});
  }

  render(){
    let newCategories = this.state.categories.map((item)=>
    <li key={item._id} > 分类名：{item.name} <br />
      <form onSubmit={this.handleNewProduct.bind(this)}>
        1.商品名称：<input name="aaa" ref="goodsName" type='text'/><br/>
        2.商品简介：<input name="bb" ref='goodsProfile' type='text'/><br/>
        3.商品价格：<input name="cc" ref='goodsPrice' type='text'/><br/>
        4.商品图片外链：<input name="dd" ref='goodsPic' type='text'/><br/>
        4.商品id：<input name="ee" ref='goodsId' type='text'/><br/>
        <button name='aaa' > 添加商品 </button>
      </form>
      <button onClick={this.handleClick.bind(this,item._id)}> 删除分类 </button>
    </li>)

    return(
      <div>
        <h2>创建商品分类</h2>
        <ul>
          {newCategories}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input ref='category' type='text'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Home
