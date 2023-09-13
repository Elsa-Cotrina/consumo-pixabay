import React, { useEffect, useState } from 'react'
import { getApi } from '../helpers/ConsumeApi'
import { ImgItems } from './ImgItems';
import Container from "@mui/material/Container";
import {Grid, Card, CardContent, Typography, CardActions, CardActionArea, CardMedia} from "@mui/material"


export const PintadonImg = ({valor}) => {
const[infoApi,setInfoApi]=useState([]);

useEffect(()=>{
    getApi(valor).then((newImages)=>setInfoApi(newImages.hits))
},[valor])


  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} style={{marginTop:"20px"}}>
        
        {infoApi.map((img)=>{
            return <ImgItems key={img.id}{...img}/>
        })}
      </Grid>    
    </Container>
  )
}
