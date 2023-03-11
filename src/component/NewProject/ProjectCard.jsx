import * as React from 'react';
import Card from '@mui/material/Card';
import './css/ProjectCard.css';
import { Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const theme = createTheme({

  palette: {
    primary: {
      main: '#ff9800',
    }
  },
});

export default function ProjectCard({imgSrc,project}) {
  return (
      <Card className='projectInfo' variant="outlined">
        <img className='projectImg'src={imgSrc}/>
        <h5 className='projectName'>{project.name}</h5>
        <p className='projectAddress'>{project.address}</p>
        <div  style={{display:'flex'}}>
          <h5 className='projectPrice'>{project.price}</h5>
          <div className='projectProgress'>
            <span >{project.progress}</span>
            <ThemeProvider theme={theme}>
              <LinearProgress variant="determinate" value={project.progressValue} color='primary'/>
            </ThemeProvider>
          </div>
        </div>
        <Button id='shortList' variant='contained' ><FavoriteBorderIcon/>ShortList</Button>
        <Button id='details' variant='contained' >Details</Button>
      </Card>

  );
}