//SERIA EL ITEM
import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";


const ItemCard = ({Info}) => {
  return (
    <Card sx={{ maxWidth: 345, height:350, border: "1px solid black" }} >
            <CardMedia
              sx={{ height: 140}}
              image={Info.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Info.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Info.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Info.precio}
              </Typography>
            </CardContent>
            <CardActions style={{height:100}}>
              <Button variant="contained" size="small">
                Ver detalle
              </Button>
              <Button variant="contained" size="small">
                Agregar al Carrito
              </Button>
            </CardActions>
          </Card>
  )
}

export default ItemCard