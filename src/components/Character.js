
const Character = ({id, img, name, status, species, type, gender}) => {
    return(
<div className="Character" /*id={CHARACTER ID HERE}*/>
     <li>
       <a href={url} target="_blank" rel="noreferrer"><h4>{name}</h4></a>
       <img src={img} alt={name} />
       <span className="card-detail">Status: {status}</span>
       <span className="card-detail">Species: {species}</span>
       <span className="card-detail">Type: {type}</span>
       <span className="card-detail">Gender: {gender}</span>
     </li>
 </div>
    )
}

export default Character