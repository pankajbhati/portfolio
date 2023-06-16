import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

// assets
import IndusValleyPartners from '../../assets/Indus_Valley_Partners.png';


const CardComponent = () => {
    return (
      <>
        <Card sx={{ maxWidth: 345, backgroundColor: "beige" }}>
          {/* <CardMedia
            component="img"
            alt="Project Image"
            height="140"
            img={IndusValleyPartners}
          /> */}
          <CardContent>
            <div>
              <img src={IndusValleyPartners} alt="Image" />
            </div>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </>
    );
};

export default CardComponent;