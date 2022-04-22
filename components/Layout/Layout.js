import Head from "next/head"
import { Box } from "@chakra-ui/react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


const Layout = ({children}) => {
  return (
   <>
   <Head>
     <title>Real-Estate</title>
   </Head>
   <Box maxWidth={'1280px'} m='auto' w={{base : 'fit-content'}}>
   <header>
       <Navbar/>
   </header>
   <main>
       {children}
   </main>
   <footer>
      <Footer/>
   </footer>
   </Box>
   </>
  )
}

export default Layout