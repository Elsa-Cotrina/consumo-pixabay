import { useState } from "react";
import {Grid, Card, CardContent, Typography, CardActions, CardActionArea, CardMedia, Button} from "@mui/material"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:1000,
  height:800,
  display: "flex",
  justifyContent:"center",
  boxShadow: 50,
  p: 4,
};


export const ImgItems = ({ largeImageURL, webformatURL, downloads, likes, comments, views }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

 
        
          <Grid item xs={12} sm={4} ms={4}>

          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={largeImageURL} loading="lazy" style={{ width: "100vw", height: "110%" }} />
          </Box>
          </Modal>

              <Card sx={{ maxWidth: 345, backgroundColor: "lightblue" }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia 
                    component="img"
                    height="140"
                    image={webformatURL} 
                    style={{borderRadius:"5px"}}
                  />
                  <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography  gutterBottom sx={{ fontSize: 15 }} component="div">
                    <li className="list-group-item">
                       Downloads: {downloads}
                    </li>
                    <li className="list-group-item">
                       Likes: {likes}
                    </li>
                    <li className="list-group-item">
                      Comments: {comments}
                    </li>
                    <li className="list-group-item">
                       Views: {views}
                    </li>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant="contained" size="medium" onClick={handleOpen} sx={{ backgroundColor: 'green' }}>
                    Ver Imagen
                  </Button>
                </CardActions>
              </Card>
            </Grid>

      

    {/* <div>
      <img src={webformatURL} />
    </div> */}
    </>
  );
};
