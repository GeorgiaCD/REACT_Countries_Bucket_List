import Country from "./Country"

const CountryList = ({country, onMoveToVisited}) => {

    const mappedCountry = country.map(country =>{
        return <Country country={country} key={country.id} onMoveToVisited={onMoveToVisited}/>
    })

    return(
        <>
            {mappedCountry} 
        </>
    )

}

export default CountryList;