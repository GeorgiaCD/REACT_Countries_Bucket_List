const Country = ({country, onMoveToVisited}) =>{

    const handleClick = () => {
        onMoveToVisited(country);
      };


    return(
        <>
        <h2>{country.name.common}</h2>
        <button onClick= {handleClick}>I have been already!</button>
        </>
    
    )
}

export default Country;