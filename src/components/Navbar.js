import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';
import logoMobile from '../assets/images/logoMobile.png';

const Navbar = () => {

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

  window.addEventListener('resize', resize);

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }}
      px='20px'
    >
      <Link to='/'>
        { mobile ? <img src={logoMobile} alt="logo" style={{ width: '60px', height:'45px' }} /> : <img src={Logo} alt="logo" style={{ width: '200px', height:'50px' }} /> }
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
      <Link to='/'  style={{textDecoration: 'none', color: '#eee', borderBottom: '3px solid #C7964F'}}>
          Home
      </Link>
        <a href="#exercice" style={{textDecoration: 'none', color:'#eee'}}> Exercices </a>
      </Stack>
      <Stack>

      </Stack>
    </Stack>
  )
}

export default Navbar