import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Counter from "../Counter/Counter";
import { Products } from "../../ListProducts";
import ItemList from "./ItemList";

const ItemListContainer = ({Lucas}) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() =>{
        resolve(Products)
      }, 2000);
    });
    getData.then(res => setData(res))

  }, []);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Title name={Lucas} />
      <Counter initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
