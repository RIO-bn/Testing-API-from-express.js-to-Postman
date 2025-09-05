import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Box minH={"100vh"}>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Homepage/>} />
           <Route  path='/' element={<Createpage/>} />
        </Routes>
      </Box>
    </>
  )
}

export default App
