import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] =useState(null);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() =>{
        console.log("Data is loading");
        loadData();
    },[]);

    const moveCountryToVisited = (countryToMove) => {
        // Remove the country from the countries list
        const updatedCountries = countries.filter(
          (country) => country.id !== countryToMove.id
        );
        // Add the country to the visited countries list
        setVisitedCountries([...visitedCountries, countryToMove]);
    
        // Update the countries state
        setCountries(updatedCountries);
    };

    return(
        <>
            <h1>Countries</h1>
            <h2>Country List</h2>
            { countries ? <CountryList country={countries}/> :<p>loading...</p>}
            <h2>Visited Countries</h2>
            <CountryList countries={visitedCountries} />
        </>
    )

}

export default CountryContainer;