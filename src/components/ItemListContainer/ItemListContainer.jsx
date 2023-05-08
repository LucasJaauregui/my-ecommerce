import React from "react";
import Title from "../Title/Title";
import Counter from "../Counter/Counter";

const ItemListContainer = ({ Lucas }) => {
  
  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
  };
  
  return (
    <>
      <Title name="Lucas" />
      <Counter initial ={1} stock={5} onAdd={onAdd}/>
    </>
  );
};

export default ItemListContainer;
