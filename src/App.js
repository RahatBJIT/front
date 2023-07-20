import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
// import useLocalStorage from "./hooks/useLocalStorage";

import { LoginContext } from "./context/LoginContex";
import axios from "./api/axios";



function App() {
  const { data, loading, error } = useFetch("api/course");

  const [role, setRole] = useState("");
 

  const [loggedIn, setLoggedIn] = useState(false);

  const [userData, setUserData] = useState(null);
  const [errorss, setError] = useState(null);
  const [uploaded, setUploaded] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem("uploadedfortss")==null) {
      setUploaded(false)
      
    }
    else{
      setUploaded(true)

    }

  }, [])
  

  

 


  
  useEffect(() => {
    const token = window.localStorage.getItem("tss-token")
    axios.get('/api/auth/validation', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUserData(response);
      if (response.status==200) {

        setRole(response.data.data.role)
        setLoggedIn(true);
        
      }
    }).catch((err) => {
      setError(err);
      setLoggedIn(false);

    }).finally(() => {
      console.log("Loding Finished ");
    })

  }, [])


 
  useEffect(() => {
    if ( userData) {
      // console.log(userData);

    }
    if (errorss) {
      console.log(errorss);

    }
  }, [userData])



  useEffect(() => {
    if (!loading && data) {
      // console.log(data);

    }
    if (!loading && error) {
      console.log(error);

    }
  }, [loading])

  useEffect(() => {
    console.log("Login Status :" + loggedIn);

  }, [loggedIn])




  const [close, setClose] = useState(true);

  const toggleSideBar = () => {
    setClose(prev => !prev)
  }
  return (

    <Box >
      <LoginContext.Provider value={{uploaded , setUploaded, userData, setUserData, loggedIn, setLoggedIn ,role, setRole}}>

        <Navbar courseNumber={data?.data.data.dataLength} onClose={toggleSideBar} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar close={close} />

          <Feed data={data} close={close} loading={loading} />
          <Rightbar />

        </Stack>
      </LoginContext.Provider>

    </Box >


  );
}

export default App;
