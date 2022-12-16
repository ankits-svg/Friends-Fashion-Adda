import { Box } from '@chakra-ui/react';
import Announcement from './Components/Announcement';
import Navbar from './Components/Navbar';
import Nav2 from './Components/Nav2';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Box >
          <Announcement/>
            <Navbar/>
      </Box>
      <hr />
      <Nav2/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
