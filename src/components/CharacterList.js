import Character from "./Character"

const CharacterList = ({charArray}) => {
console.log(charArray)
    // const { id, image, name, status, species, type, gender} = charArray

    // console.log(charArray.id)
    const characterList = charArray.map((character) => (
        <Character key={character.id} id={character.id} image={character.image} name={character.name} status={character.status} species={character.species} type={character.type} gender={character.gender}></Character>  
)) 

    return(
        <div className='CharactersList'> 
            <ul className="Characters">
                {characterList}
            </ul>
            
        </div>
    )
}

export default CharacterList