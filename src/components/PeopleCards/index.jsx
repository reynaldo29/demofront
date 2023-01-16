import "./card.css";


const Card = ({people})=>{
    return(
        <div className="cards">

            <div className="card">
            { people.map((x) => (
        x.name

            
    )
    
    )}  
            </div>
        </div>
    )
}

export default Card;