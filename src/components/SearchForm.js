

const SearchForm = ({query, setQuery}) => {

    const handleChange = (e) => {
        // console.log(KeyboardEvent)
        setQuery(e.target.value)
        
    }
    
    return(
        <div className='Search'>
            <input value={query} onChange={handleChange} placeholder="Search by Name"/>
        </div>
    )
}

export default SearchForm