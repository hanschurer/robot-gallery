import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>();

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobotGallery(data);
    }catch(e:any){
      setError(e.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <h1>罗伯特机器人炫酷吊炸天online 购物平台</h1>
      </div>

      <ShoppingCart />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count:{count}</span>
      {(!error || error!=="") && <div> Network Error: {error} </div>}

      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((robots) => (
            <Robot id={robots.id} email={robots.email} name={robots.name} />
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default App;
