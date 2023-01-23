import "./card.css";

const Card = ({ people }) => {
  return (

const Card = ({people})=>{
    return(
        <div className="cards">
            { people.map(({name,age}) => (
            <div className="card">
               <p>{name}{age}</p> 
            </div>
            ))}  
        </div>
        
    )
}

export default Card;
