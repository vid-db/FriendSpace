import { ThemeProvider } from '@emotion/react'
import { Box, Stack, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Feed from './Components/Feed'
import NavBar from './Components/NavBar'
import RightBar from './Components/RightBar'
import SideBar from './Components/SideBar'
import AddPost from './Components/addPost'

const App = () => {

    const [mode, setMode] = useState("dark")
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <NavBar />
                <Stack direction={"row"} spacing={0} justifyContent={"space-between"}>
                    <SideBar setMode={setMode} mode={mode} />
                    <Feed />
                    <RightBar />
                </Stack>
                <AddPost />
            </Box>
        </ThemeProvider>
    )
}

export default App