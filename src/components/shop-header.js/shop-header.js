import React, {Component} from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { MapStateToProps, connect } from 'react-redux';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to = '/'>
      <div className="logo text-dark" href="#">ReStore</div>
      </Link>
      <Link to = '/cart'>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
      </Link>
    </header>
  );
};

class ShopHeaderContainer extends  Component {

  numItems = (items)=>{
    console.log(items)
    if (items.length == undefined){
      return 0
    }
    const  arrNum = items.map(({count})=> count)
    console.log(arrNum)
    const   num = arrNum.reduce((a,b)=> a+b,0)
    console.log(num)
    return num
  }
  
  render(){
    const {items, total} = this.props;
    const num = this.numItems(items);
    
  
    return <ShopHeader numItems = {num} total={total}/>
  }
}


const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}})=>{
  return {
    items: cartItems,
    total:orderTotal
  };
};


export default connect(mapStateToProps, )(ShopHeaderContainer)




