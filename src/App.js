import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, ThemeProvider, Stack, createTheme } from "@mui/material";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";

function App() {
  const { data, loading, error } = useFetch("api/course");

  useEffect(() => {
    if (!loading && data) {
      console.log(data);

    }
    if (!loading && error) {
      console.log(error);

    }
  }, [loading])



  const [close, setClose] = useState(true);

  const toggleSideBar = () => {
    setClose(prev => !prev)
  }

  return (

    <Box >
      <Navbar courseNumber={data?.data.data.dataLength} onClose={toggleSideBar} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar close={close} />

        <Feed data={data} close={close} loading={loading} />
        <Rightbar />

      </Stack>

    </Box >


  );
}

export default App;
