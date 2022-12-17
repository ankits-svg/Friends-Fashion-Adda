import { Box } from '@chakra-ui/react';
import Announcement from './Components/Announcement';
import Navbar from './Components/Navbar';
import Nav2 from './Components/Nav2';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer/Footer';
import ThanksPage from './Components/Cart/ThanksPage';
import Otp from './Components/Cart/Otp';
import Payment from './Components/Cart/Payment';
import { ParentCart } from './Components/Cart/ParentCart';



function App() {
  return (
    <div className="App">
      <ParentCart/>
      <Payment/>
      <Otp/>
      <ThanksPage/>
      <Box >
          <Announcement sticky="top"/>
            <Navbar sticky="top"/>
      </Box>
      <hr />
      <Nav2/>
      <AllRoutes/>
      
      <Footer/>
    </div>
  );
}

export default App;
