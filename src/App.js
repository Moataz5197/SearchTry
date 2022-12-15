import './App.css';
import {useEffect, useState } from 'react';
import CountryList from './components/CountryList/CountryList';
import axios from 'axios';

function App() {

  const URL = process.env.REACT_APP_BASE_URL;
  const [countryList, setCountryList] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [searchResult,setSearchResult] = useState([]);

  const retrieveCountries = async () => {
    const response = await axios.get(URL);
    return response.data;
  };
  const searchHandler = (searchTerm)=> {

    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      console.log(searchTerm);
      const  newCountryList = countryList.filter((country)=> {

        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : "";
        console.log(capital)
        return name.toLowerCase().startsWith(searchTerm) || capital.toLowerCase().startsWith(searchTerm)
            
      });
      console.log(newCountryList)
      setSearchResult(newCountryList);
    }
    else{ 
      setSearchResult(countryList);
    }


  }
  const getSearchTerm = (e)=>{
    searchHandler(e.target.value)
  }
  useEffect(() => {
    const getAllCountries = async () => {
      const allCountries = await retrieveCountries();
      if (allCountries) setCountryList(allCountries);
    };

    getAllCountries();
  }, []);

  
  
  return (
    <div>
       <div className='Search'>

         <div className='iconsearch'>
           <input
            type='text' 
            placeholder='SearchCountries'
            className='prompt'
            value={searchTerm}
            onChange={getSearchTerm}
           /> 
           <i className='icon'></i>

         </div>
       </div>
       <CountryList 
        countryList={searchTerm.length < 1 ? countryList : searchResult} 
        term = {searchTerm}
        searchkeyword = {searchHandler}
        />
    </div>
  );
}

export default App;
