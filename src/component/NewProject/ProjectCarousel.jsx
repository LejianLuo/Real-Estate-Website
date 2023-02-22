import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';


export default function ProjectCarousel() {
  

  const [value, setValue] = React.useState(0);
  const [img,setImg]=React.useState(imgList);
  const [proj,setProj]=React.useState(projectList);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{overflow:'hidden'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{style: { display: 'none' }
  }}>
      <ProjectCard imgSrc={img['1']} project={proj[0]}/>
      <ProjectCard imgSrc={img['2']} project={proj[1]}/>
      <ProjectCard imgSrc={img['3']} project={proj[2]}/>
      <ProjectCard imgSrc={img['1']} project={proj[0]}/>
      <ProjectCard imgSrc={img['2']} project={proj[1]}/>
      <ProjectCard imgSrc={img['3']} project={proj[2]}/>
      <ProjectCard imgSrc={img['1']} project={proj[0]}/>
      <ProjectCard imgSrc={img['2']} project={proj[1]}/>
      <ProjectCard imgSrc={img['3']} project={proj[2]}/>
      <ProjectCard imgSrc={img['1']} project={proj[0]}/>
      <ProjectCard imgSrc={img['2']} project={proj[1]}/>
      <ProjectCard imgSrc={img['3']} project={proj[2]}/>
      <ProjectCard imgSrc={img['1']} project={proj[0]}/>
      <ProjectCard imgSrc={img['2']} project={proj[1]}/>
      <ProjectCard imgSrc={img['3']} project={proj[2]}/>
       
       
        
      </Tabs>
    </Box>
  );
}

let imgList={
  '1':'https://static.squareyards.com/resources/images/gurgaon/tn-projectflagship/tn-smart-world-one-dxp-project-flagship1-8252.jpg',
  '2':'https://static.squareyards.com/resources/images/gurgaon/tn-projectflagship/tn-m3m-antalya-hills-project-flagship1-6497.jpg',
  '3':'https://static.squareyards.com/resources/images/noida/tn-projectflagship/tn-grandslam-ithum-project-flagship1.jpg',
  
}
const projOne={
  name:'Smart World One DXP',
  address:'Sector 113, Gurgaon',
  price:'₹ 1.83 Cr to 3.42 Cr',
  progress:'New Launch',
  progressValue:30
}
const projTwo={
  name:'M3M Antalya Hills',
  address:'Sector 79, Gurgaon',
  price:'₹ 1.10 Cr to 1.50 Cr',
  progress:'New Launch',
  progressValue:30
}
const projThree={
  name:'Grandslam IThum',
  address:'Sector 62, Noida',
  price:'₹ 52.0 L to 2.74 Cr',
  progress:'Ready to Move',
  progressValue:100
}

const projectList=[projOne,projTwo,projThree];
