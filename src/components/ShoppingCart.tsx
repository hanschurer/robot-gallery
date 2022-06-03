import React, { Component } from "react";
import styles from "./ShoppingCart.module.css"

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
    <div className={styles.cartContainer}>
    <button className={styles.button} onClick={this.handleCLick}>购物车 2 (件)</button>
    <div className={styles.cartDropDown} style={{display: this.state.isOpen ?"block":"none"}}>
        <ul>
            <li>robot 1</li>
            <li>robot 2</li>
        </ul>
    </div>
    
    </div>);
  }
}

export default ShoppingCart;
