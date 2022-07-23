import React, { useState , useEffect } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import Logo from '../assets/images/logo.png';
import logoMobile from '../assets/images/logoMobile.png';
import footerImg from '../assets/images/zyzz.png';

const Footer = () => {
  const [mobile, setMobile] = useState(true);
  
  const resize = () => {
    if (window.screen.width > 600) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }

  useEffect(() => {
    resize();
  }, [])

  return (
    <Box className='footer-container'>
      <Stack className='footer-links'
        sx={{
        flexDirection: { lg:'row', xs:'column'}
        }}
         justifyContent='space-evenly' alignItems='center' style={{ borderRight: 'solid 1px #C7964F', borderBottom: 'solid 1px #C7964F' }}>
            <Typography>
                { mobile ? <img src={logoMobile} alt="logo" style={{ width: '60px', height:'45px' }} /> : <img src={Logo} alt="logo" style={{ width: '200px', height:'50px' }} /> }
            </Typography>
          <Typography
            sx={{
              padding: {lg:'50px', xs:'10px'}
              }}
              color='#fff'>
              "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion." <br />— Arnold Schwarzenegger
            </Typography>
      </Stack>
      <Stack className='footer-list' direction='row' justifyContent='space-between' alignItems='center'  p={5} style={{borderRight:'solid 1px #C7964F'}}>
          <Typography color="#fff"
            sx={{
              fontSize: {lg:'1rem', xs:'0.7rem'}
            }}>
              <h4 style={{fontWeight:'800'}}>Recommendations</h4>
              <ul style={{listStyle:'none'}}>
                <li>Some other muscle website</li>
                <li>Some other muscle website</li>
                <li>Some other muscle website</li>
              </ul>
            </Typography>
            <Typography color="#fff"
              sx={{
                fontSize: {lg:'1rem', xs:'0.7rem'}
              }}>
              <h4 style={{fontWeight:'800'}}>Nutrition help</h4>
              <ul style={{listStyle:'none'}}>
                <li>Some nutrition website</li>
                <li>Some nutrition website</li>
                <li>Some nutrition website</li>
              </ul>
            </Typography>
            <Typography color="#fff"
              sx={{
                fontSize: {lg:'1rem', xs:'0.7rem'}
              }}>
              <h4 style={{fontWeight:'800'}}>Usefull channels</h4>
              <ul style={{listStyle:'none'}}>
                <li>Some youtube channels</li>
                <li>Some youtube channels</li>
                <li>Some youtube channels</li>
              </ul>
            </Typography>
      </Stack>
      <Stack className='footer-contact' direction='column' alignItems='center' justifyContent='space-evenly' color="#fff">
        <Stack style={{alignSelf:'flex-start', marginLeft:'5rem'}}>
          <Typography variant='h5' style={{fontWeight:'700', color:"#C7964F"}}>
            Fit-kings 
          </Typography>
          <Typography variant='h3' style={{fontWeight:'700'}}>
            Contact
          </Typography>
        </Stack>
          <TextField  style={{width:'80%', backgroundColor:'#fff', borderRadius:'5px'}}
                      height='76px'
                      placeholder='Email'
                      type='text'
                      />
                    <Button
                      sx={{
                        background: '#C7964F',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg:'175px', xs:'80px'},
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        alignSelf:'center'
                      }}>
                      Send
                    </Button>
      </Stack>
      <Stack className='footer-copyright' style={{ borderTop: 'solid 1px #C7964F' }} direction='column' justifyContent='flex-end'>
        <Typography color="#fff" variant='subtitle1'>
          <ul style={{listStyle:'none'}}>
            <li>MickaelCe copyright 2022</li>
          </ul>
        </Typography>
      </Stack>
      <img src={footerImg} alt='muscular god' className='footer-image'/>
    </Box>
  )
}

export default Footer