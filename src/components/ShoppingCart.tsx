import React, { Component } from "react";
import styles from "./ShoppingCart.module.css"
import {appContext} from "../AppState"

interface Props {}

interface State {
  isOpen: boolean;
}

export class ShoppingCart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

handleCLick=(e)=>{
    this.setState({isOpen: !this.state.isOpen});
}

  render() {
    return (
        <appContext.Consumer>{(value)=>{
         return    <div className={styles.cartContainer}>
            <button className={styles.button} onClick={this.handleCLick}>购物车 {value.shoppingCart.items.length} (件)</button>
            <div className={styles.cartDropDown} style={{display: this.state.isOpen ?"block":"none"}}>
                <ul>
                  {value.shoppingCart.items.map(i=><li> {i.name}</li>)}
                </ul>
            </div>
            
            </div>

        }}
            
        </appContext.Consumer>)
  }
}

export default ShoppingCart;
