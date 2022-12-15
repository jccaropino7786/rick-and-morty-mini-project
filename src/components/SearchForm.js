

const SearchForm = () => {

    const handleChange = (e) => {
        // console.log(KeyboardEvent)
    }
    
    return(
        <div className='Search'>
            <input onChange={handleChange} placeholder="Search by Name"/>
        </div>
    )
}

export default SearchForm