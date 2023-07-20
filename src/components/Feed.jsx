import React, { useContext } from 'react'
import { Box } from "@mui/material";

import { Route, Routes } from '../../node_modules/react-router-dom/dist/index';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import NotFound from './NotFound';
import { LoginContext } from '../context/LoginContex';
import UploadFilePage from '../pages/UploadFilePage';
import EmailVerification from '../pages/EmailVerification';

const Feed = ({ data, loading, close }) => {

  const { role, uploaded } = useContext(LoginContext);


  return (
    <Box flex={4} sx={{ margin: 5, display: { xs: close ? "block" : "none" } }}>


      <Routes>
        <Route path="/" element={!loading ? <HomePage data={data} /> : <h1>Loading</h1>} />
        <Route path="/courses" element={<CoursesPage courses={data} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/registration"
          element={
            role === "USER" ?( !uploaded ? <UploadFilePage />:<EmailVerification />)  :   <RegistrationPage />
          }
        />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Box>

  )
}

export default Feed