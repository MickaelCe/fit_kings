import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciceOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercices, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercicesData = async () => {
      const bodyPartsData = await fetchData('https://exercicedb.p.rapidapi.com/exercises/bodyPartList', exerciceOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercicesData();
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exercicesData = await fetchData('https://exercicedb.p.rapidapi.com/exercises', exerciceOptions);
      const searchedExercises = exercicesData.filter(
        (exercice) => exercice.name.toLowerCase().includes(search)
          || exercice.target.toLowerCase().includes(search)
          || exercice.equipement.toLowerCase().includes(search)
          || exercice.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercices(searchedExercises);
    }
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p="20px"
      sx={{
        mt: { lg: '320px', sm: '37px'  }
      }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px'}
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercices <br /> you should try
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700px',
              border: 'none',
              borderRadius:'4px'
            },
            width: {
              lg: '800px', xs: '300px'
            },
            background: '#fff',
            borderRadius: '4px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search exercices'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            background: '#C7964F',
            color: '#fff',
            textTransform: 'none',
            width: { lg:'175px', xs:'80px'},
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{
          position: 'relative',
          width: '100%',
          p: '20px'
          }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises