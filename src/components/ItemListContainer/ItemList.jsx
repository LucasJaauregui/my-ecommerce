//EL ENCARGADO DE MAPEAR CADA PRODUCTO DE LA BASE DE DATOS EN UN ITEM
import ItemCard from "./ItemCard";
import React from "react";

const ItemList = ({ data =[] }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      minHeight: "90vh",
      padding:"40px",
      gap:"20px"
    }}> 
    {data.map((product) => {
      return (
        <ItemCard Key={product.id} Info={product}/>
      )
    })}
    </div>
  );
};
export default ItemList;
