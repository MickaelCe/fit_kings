import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/hero.png';
import ExerciseSVG from '../assets/images/Exercise.svg';


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }}
      position='relative'
      p='20px'
      className='hero-box'
    >
        <Typography color='#C7964F' fontWeight='600' fontSize='26px'>
              FIT-KINGS
        </Typography>
      <Typography
        color='rgb(238 238 238)'
        fontWeight='700'
        sx={{
          fontSize: { lg: '44px', xs: '40px' },
        }}
        mb='23px'
        mt='30px'
        textTransform='upperCase'>
                We are all <br/>gonna make it
        </Typography>
        <Typography color='rgb(238 238 238)' fontSize='22px' lineHeight='35px' mb={3}>
                Start the grind NOW
      </Typography>
      <Button variant='contained' style={{ backgroundColor: '#C7964F', color:'#fff' }} href='#exercises'>Exercices</Button>
      <img src={ExerciseSVG} className='hero-banner-svg'/>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
      </ Box>
  )
}

export default HeroBanner