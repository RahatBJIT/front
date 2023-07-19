import React, { useEffect } from 'react'
import { Box, Container, Stack } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Route, Routes } from '../../node_modules/react-router-dom/dist/index';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const Feed = ({ data, loading ,close}) => {


  

  return (
    <Box flex={4} sx={{ margin:5, display: { xs: close?"block":"none"}}}>


      <Routes>
        <Route path="/" element={!loading ? <HomePage data={data} /> : <h1>Loading</h1>} />
        <Route path="/courses" element={<CoursesPage courses={data} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />


      </Routes>
    </Box>

  )
}

export default Feed