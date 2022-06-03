import React from "react";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any;
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    ).then(data=>this.setState({robotGallery:data}));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h1>罗伯特机器人炫酷吊炸天online 购物平台</h1>
        </div>

        <ShoppingCart />

        <div className={styles.robotList}>
          {this.state.robotGallery.map((robots) => (
            <Robot id={robots.id} email={robots.email} name={robots.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
