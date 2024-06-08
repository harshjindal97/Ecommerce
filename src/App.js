import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/headers';
import Home from './pages/home';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Footer from './components/footer';
import ProductModal from './components/productModal';
import Listing from './pages/Listing/Listing';

const MyContext = createContext();


function App() {
  const [isOpenproduct , setisOpenProduct] = useState(false);
  const [countryList , setCountryList] = useState([]);
  useEffect(()=>{
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  },[])
  const getCountry=async (url)=>{
     await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      // console.log(res.data.data);
    });
  }
  const values = {
    countryList,
    setCountryList,
    isOpenproduct,
    setisOpenProduct,
  }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values} >
          <Header />
          <Routes>
            <Route path='/' exact={true} element={<Home/>} />
            <Route path='/cat/:id' exact={true} element={<Listing/>} />
          </Routes>
          <Footer/>
          {isOpenproduct && <ProductModal />}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export {MyContext};